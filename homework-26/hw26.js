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
        const formCustomer = document.querySelector('.customer-form')
        const submit = document.querySelector('.submit')
        formCustomer.style.display = 'flex'

        submit.addEventListener('click', () => {
            const tableCustomer = document.getElementById('table-customer');
            const formData = new FormData(formCustomer);
            const table = document.createElement('table')
            const h4 = document.createElement('h4')
            const p = document.createElement('p')

            formData.forEach((value, key) => {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);

                cell1.textContent = key;
                cell2.textContent = value;
            });

            tableCustomer.appendChild(h4)
            h4.textContent = `Вітаємо!Ви упішно придбали ${productName}`
            tableCustomer.appendChild(table);
            tableCustomer.style.left = '100px'
            formCustomer.style.display = 'none'
            setTimeout(() => tableCustomer.style.display = 'none', 5000)
        })
    })
})


showGoods(listOfGoods)
hideAllCategories()


