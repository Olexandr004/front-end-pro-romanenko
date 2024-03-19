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
        const formCustomer = document.querySelector('.customer-form');
        const submit = document.querySelector('.submit');
        formCustomer.style.display = 'flex';

        document.querySelector('.close-form').addEventListener('click', () => {
            formCustomer.style.display = 'none'
        })

        formCustomer.addEventListener('submit', (event) => {
            event.preventDefault();

            const quantity = formCustomer.elements.quantity;
            const pay = formCustomer.elements.pay;
            const isValidQuantity = validateText(quantity.value);
            const isValidPay = checkRadioValidity(pay);

            if (isValidQuantity && isValidPay) {
                handleSubmit(productName, formCustomer, submit);
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

function handleSubmit(productName, formCustomer, submit) {
    submit.addEventListener('click', () => {
        const tableCustomer = document.getElementById('table-customer');
        const h4 = document.querySelector('h4');

        tableCustomer.style.display = 'flex';
        h4.textContent = `Поздравляем! Вы успешно купили ${productName}`;
        tableCustomer.style.left = '100px';
        formCustomer.style.display = 'none';

        const formData = new FormData(formCustomer);
        formData.forEach((value, key) => {
            const td = document.querySelector(`td[data-name='${key}']`);
            if (td) {
                td.textContent = value;
            }
        });

        formCustomer.reset();

        const close = document.querySelector('.close');
        close.addEventListener('click', () => {
            tableCustomer.style.display = 'none';
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

showGoods(listOfGoods)
hideAllCategories()


