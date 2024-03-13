const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
    const form = document.getElementById('formUser')
    const tableContainer = document.getElementById('table-container')
    const formData = new FormData(form);
    const table = document.createElement('table');

    formData.forEach((value, key) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = key;
        cell2.textContent = value;
    });

    tableContainer.appendChild(table);
    form.style.display = 'none';
})