const sortArray = (arr) => {
    arr.sort((a, b) => {
        return a - b
    })
}

const deleteElements = (arr) => {
    arr.splice(1, 3)
}

const printArray = (arr) => {
    alert(arr)
}

const array = [];

const length = prompt('Напишіть довжину масиву!')
for (let i = 0; i < length; i++) {
    const getElements = prompt(`Напишіть ${i + 1} елемент масиву!`)
    array.push(getElements)
}

sortArray(array)
deleteElements(array)
printArray(array)