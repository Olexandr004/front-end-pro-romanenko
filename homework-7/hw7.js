const myFunc = (a, b, c) =>  {
    return (a + b + c)/3
}

const num1 = prompt('Write your first number!')
const num2 = prompt('Write your second number!')
const num3 = prompt('Write your third number!')

alert(myFunc(+num1, +num2, +num3))