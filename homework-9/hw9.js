const pow = (x, n) => {
    if (+n === 1) return x;
    return x * pow(x,(--n))
}

const num = prompt('Write your number!')
const degree = prompt('Write your degree!')

alert(pow(num, degree))