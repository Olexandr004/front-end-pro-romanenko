const img = document.querySelector('img')
const imgArray = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/9.jpg']
const randomInd = Math.floor(Math.random() * imgArray.length)
img.src = imgArray[randomInd]
img.style.width = '100%'