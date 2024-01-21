const addSubMulDiv = window.prompt ('add?sub?mul?div?')

const number1 = window.prompt('Write your first number')
const number2 = window.prompt('Write your second number')

const add = +number1 + +number2
const sub = number1 - number2
const mul = number1 * number2
const div = number1 / number2

if (addSubMulDiv === 'add') {
    alert(`${+number1} + ${+number2} = ${add}`)
} else if (addSubMulDiv === 'sub') {
    alert(`${number1} - ${number2} = ${sub}`)
} else if (addSubMulDiv === 'mul') {
    alert(`${number1} * ${number2} = ${mul}`)
} else if (addSubMulDiv === 'div') {
    alert(`${number1} / ${number2} = ${div}`)
}

