const myFunc = () => {
    let number = 0;
    return function sum (value) {
        number += value;
        return number
    }
}

let myFunc2 = myFunc()
console.log(myFunc2(3))
console.log(myFunc2(5))
console.log(myFunc2(20))
