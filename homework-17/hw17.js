const averageValue = (array) => {
    const numberElements = array.filter(item => typeof item === 'number');
    const sum = numberElements.reduce((sum, number) => sum + number, 0);
    return sum / numberElements.length
}

const array = ['', 'str', 4, 2, true, false, 6, 8]

console.log(averageValue(array))