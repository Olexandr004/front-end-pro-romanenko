const blurOrFocus = document.getElementById('blur-focus')
const input = document.querySelector('input')

input.addEventListener('focus', (event) => {
    blurOrFocus.style.display = 'block'
})
input.addEventListener('blur', (event) => {
    blurOrFocus.style.display = 'none'
})