const listOfGoods = document.querySelectorAll('.cards')
const categories = document.querySelectorAll('.categories li')

const products = document.querySelectorAll('.cards div')
const laptopsProducts = document.querySelectorAll('.laptop')
const phonesProducts = document.querySelectorAll('.phone')
const householdProducts = document.querySelectorAll('.household')
const clothesProducts = document.querySelectorAll('.cloth')
const btn = document.querySelectorAll('.btn')

const showGoods = (product, index) => {
    product.forEach((item, ind) => {
        if (ind === index) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}

const hideAllCategories = () => {
    showGoods(laptopsProducts)
    showGoods(phonesProducts)
    showGoods(clothesProducts)
    showGoods(householdProducts)
}


categories.forEach(function (category, index) {
    category.addEventListener('click', function () {
        showGoods(listOfGoods, index)
        hideAllCategories()
    })
})

products.forEach(function (goods) {
    goods.addEventListener('click', function () {
        const productIndex = Array.from(goods.parentNode.children).indexOf(goods);
        switch (true) {
            case goods.classList.contains('laptop-list'):
                showGoods(laptopsProducts, productIndex);
                break;
            case goods.classList.contains('phone-list'):
                showGoods(phonesProducts, productIndex);
                break;
            case goods.classList.contains('household-list'):
                showGoods(householdProducts, productIndex);
                break;
            case goods.classList.contains('clothes-list'):
                showGoods(clothesProducts, productIndex);
                break;
        }
    });
});

btn.forEach(item => {
    item.addEventListener('click', () => {
        const productName = item.closest('.product').querySelector('h1').textContent;
        const price = item.closest('.product').querySelector('h3').textContent;
        const formCustomer = document.querySelector('.customer-form');
        const submit = document.querySelector('.submit');
        formCustomer.classList.add('display-flex')
        formCustomer.classList.remove('display-none')

        document.querySelector('.close-form').addEventListener('click', () => {
            formCustomer.classList.add('display-none');
        })

        formCustomer.addEventListener('submit', (event) => {
            event.preventDefault();

            const quantity = formCustomer.elements.quantity;
            const pay = formCustomer.elements.pay;
            const isValidQuantity = validateText(quantity.value);
            const isValidPay = checkRadioValidity(pay);

            if (isValidQuantity && isValidPay) {
                handleSubmit(productName, formCustomer, submit, price);
            } else {
                if (!isValidQuantity) {
                    quantity.style.outline = '2px solid red';
                    alert('Заполни форму корректно!');
                }
                if (!isValidPay) {
                    alert('Выбери способ оплаты!');
                }
            }
        });
    });
});

const myOrders = (formData, productName, price) => {
    const formDataObject = {};

    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    const orderDate = new Date();
    formDataObject.orderDate = orderDate.toISOString();

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push({productName, formData: formDataObject, price});
    localStorage.setItem('orders', JSON.stringify(orders));

    updateOrdersList();
};

function handleSubmit(productName, formCustomer, submit, price) {
    submit.addEventListener('click', () => {
        const tableCustomer = document.querySelector('.table-customer');
        const h4 = document.querySelector('h4');

        tableCustomer.classList.remove('display-none')
        tableCustomer.classList.add('display-flex');
        h4.textContent = `Поздравляем! Вы успешно купили ${productName}`;
        tableCustomer.classList.add('left-message');
        formCustomer.classList.add('display-none');

        const formData = new FormData(formCustomer);
        formData.forEach((value, key) => {
            const td = document.querySelector(`td[data-name='${key}']`);
            if (td) {
                td.textContent = value;
            }
        });

        myOrders(formData, productName, price)
        formCustomer.reset();

        const close = document.querySelector('.close');
        close.addEventListener('click', () => {
            tableCustomer.classList.add('display-none')
            tableCustomer.classList.remove('left-message')
        });
    });

}

function validateText(value) {
    const regex = /^[0-9]+$/;
    return regex.test(value);
}

function checkRadioValidity(radioButtons) {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            return true;
        }
    }
    return false;
}

const updateOrdersList = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderList = document.querySelector('.order-list');
    const tableOrders = document.querySelector('.orders-table');

    tableOrders.innerHTML = '';

    orderList.innerHTML = '';
    orders.forEach(order => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const p = document.createElement('p');

        li.textContent = order.productName;
        p.textContent = order.price;
        span.textContent = new Date(order.formData.orderDate).toLocaleString();

        orderList.appendChild(li);
        li.appendChild(p);
        li.appendChild(span);
        li.addEventListener('click', () => {
            tableOrders.innerHTML = '';

            const table = document.createElement('table');
            const btnDeleteOrders = document.createElement('button');
            const h4 = document.createElement('h4');
            table.appendChild(h4);
            h4.textContent = order.productName;
            tableOrders.classList.remove('display-none');

            for (const [key, value] of Object.entries(order.formData)) {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);

                cell1.textContent = key;
                cell2.textContent = value;
            }
            btnDeleteOrders.textContent = 'Удалить заказ'
            btnDeleteOrders.classList.add('btn-all')
            btnDeleteOrders.addEventListener('click', () => {
                const index = orders.indexOf(order);
                if (index !== -1) {
                    orders.splice(index, 1);
                    localStorage.setItem('orders', JSON.stringify(orders));
                    updateOrdersList();
                }
                tableOrders.classList.add('display-none')
            })
            tableOrders.appendChild(table);
            tableOrders.appendChild(btnDeleteOrders);
        })
    });
}
document.addEventListener('DOMContentLoaded', () => {
    updateOrdersList();
});

showGoods(listOfGoods)
hideAllCategories()


