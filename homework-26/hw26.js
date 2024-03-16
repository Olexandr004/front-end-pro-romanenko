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


categories.forEach(function (category, index) {
    category.addEventListener('click', function () {
        showGoods(listOfGoods, index)
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
    item.addEventListener('click', (event) => {
        const productName = item.closest('.product').querySelector('h1').textContent;

        showGoods(listOfGoods)
        showGoods(laptopsProducts)
        showGoods(phonesProducts)
        showGoods(clothesProducts)
        showGoods(householdProducts)
        alert(`Вітаємо ви успішно придбали ${productName}!`)
    })
})



showGoods(listOfGoods)
showGoods(laptopsProducts)
showGoods(phonesProducts)
showGoods(clothesProducts)
showGoods(householdProducts)


