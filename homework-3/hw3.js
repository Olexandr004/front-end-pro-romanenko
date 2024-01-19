
const number1 = window.prompt('Write your first number!')
const number2 = window.prompt('Write your second number!')

const add =  +number1 + +number2
const sub = number1 - number2
const mul = number1 * number2
const div = number1 / number2

const result = [
    `${+number1}+${+number2}=${add}`,
    `${number1}-${number2}=${sub}`,
    `${number1}*${number2}=${mul}`,
    `${number1}/${number2}=${div}`
]

alert(result)