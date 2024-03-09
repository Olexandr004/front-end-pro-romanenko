const generateList = (array, parentElement, level = 0) => {
    const ul = document.createElement('ul');
    array.forEach(element => {
        const li = document.createElement('li');

        if (Array.isArray(element)) {
            generateList(element, li, level + 1)
        } else {
            li.textContent = level === 0 ? element : `${level}.${element}`;
        }
        ul.appendChild(li)
    })

    if (parentElement) {
        parentElement.append(ul)
    } else {
        document.body.append(ul)
    }
}

const array = [1, 2, 3, [1, 2, 3]]
generateList(array)