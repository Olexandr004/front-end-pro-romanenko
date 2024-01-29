for (let i = 20; i <= 30; i = i + 0.5) {
    console.log(i, 'first task')
} //first task

const oneDollar = 27

for (let x = 10; x <= 100; x = x + 10) {
    console.log(x * oneDollar, 'second task')
} //second task

const N = 300

for (let b = 1; b < 100; b++) {
    if (b ** 2 > N) break;
    console.log(b, 'third task')
} //third task

const num1 = prompt('Напиши своє число, а я скажу просте воно чи ні!')

const myFunc = () => {
    if (num1 <= 1){
        return false;
    }

    for (let c = 2; c <= num1 / 2; c++) {
        if (num1 % c === 0) {
            return false
        }
    }

    return true;
}

if (myFunc() === true) {
    alert('Число являеється простим!')
} else {
    alert('Число не являється простим!')
}  //fourth task

const num2 = prompt ('Напиши своє число, а я скажу це 3 у деякій степені чи ні!')

const myFunc2 = () => {
    let num3 = num2;
    if (num3 <= 0) {
        return false
    }

    while (num3 % 3 === 0) {
        num3 /= 3;
    }

    return num3 === 1;
}

if (myFunc2() === false) {
    alert(`Шляхом зведення числа 3 у деяку степень ми не отримаємо ${num2}!`)
} else {
    alert(`Шляхом зведення числа 3 у деяку степень ми отримаємо ${num2}!`)
} //fifth task