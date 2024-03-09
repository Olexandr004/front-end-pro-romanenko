const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const slides = document.querySelectorAll('.slide')
let currentIndex = 0

const showSlide = (index) => {
    slides.forEach((slide, ind) => {
        if (ind === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none'
        }
    });

    if (index === 0) {
        prevBtn.setAttribute('disabled', 'disabled');
        nextBtn.removeAttribute('disabled');
    } else if (index === slides.length - 1) {
        prevBtn.removeAttribute('disabled');
        nextBtn.setAttribute('disabled', 'disabled');
    } else {
        prevBtn.removeAttribute('disabled');
        nextBtn.removeAttribute('disabled');
    }
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
})

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex)
    }
})

showSlide(currentIndex)


