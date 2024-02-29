let count = 1
const table = document.querySelector('table')

const width = prompt('Write the width of the table!')
const height = prompt('Write the height of the table!')

for (let i = 0; i < height; i++) {
    const tr = document.createElement('tr')
    for (let j = 0; j < width; j++) {
        const td = document.createElement('td');
        tr.append(td);
        td.innerHTML += count;
        count++;
        td.style.border = 'solid'
    }
    table.append(tr)
}

