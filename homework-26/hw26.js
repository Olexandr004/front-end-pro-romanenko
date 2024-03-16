const laptop = document.getElementById('laptop')
const phones = document.getElementById('phones')
const household = document.getElementById('households')
const clothes = document.getElementById('clothes')
const listOfGoods = document.querySelectorAll('.cards')
const laptopsProducts = document.querySelectorAll('.laptop')
const cards = document.querySelector('.card')
let currentIndex = 0

const showGoods = (product, index) => {
    product.forEach((item, ind ) => {
        if (ind === index) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}

laptop.addEventListener('click', (event) => {
    showGoods(listOfGoods, 0)
})

phones.addEventListener('click', (event) => {
    showGoods(listOfGoods,1)
})

household.addEventListener('click', (event) => {
    showGoods(listOfGoods,2)
})

clothes.addEventListener('click', (event) => {
    showGoods(listOfGoods, 3)
})


cards.addEventListener('click', (event) => {
    const target = event.target;
    if (cards.classList.contains('laptop-1')) {
        showGoods(laptopsProducts, 0)
    } else {
        showGoods(laptopsProducts,1)
    }
})
showGoods(listOfGoods)
showGoods(laptopsProducts)
