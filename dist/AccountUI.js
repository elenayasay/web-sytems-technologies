document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const role = form.querySelector('select');

        if (name.value.trim() === '' || email.value.trim() === '' || role.value.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        const accountId = form.querySelector('input[name="accountId"]');
        if (accountId) {
            updateAccount(accountId.value, name.value, email.value, role.value);
        } else {
            appendValues(name.value, email.value, role.value);
        }

        name.value = '';
        email.value = '';
        role.selectedIndex = 0; 

        form.querySelector('button[type="submit"]').textContent = 'Create Account';
        if (accountId) {
            accountId.remove();
        }
    });

    function appendValues(name, email, role) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="border p-2">${tableBody.rows.length + 1}</td>
            <td class="border p-2">${name}</td>
            <td class="border p-2">${email}</td>
            <td class="border p-2">${role}</td>
            <td class="border p-2">
                <button class="text-blue-500 p-1"><i class="fas fa-edit"></i></button>
                <button class="text-red-500 p-1 delete-btn"><i class="fas fa-trash-alt"></i></button>
            </td>
        `;
        tableBody.appendChild(newRow);
        updateIDs(); 
    }

    function updateAccount(id, name, email, role) {
        const row = tableBody.querySelector(`tr:nth-child(${id})`);
        if (row) {
            row.cells[1].textContent = name;
            row.cells[2].textContent = email;
            row.cells[3].textContent = role;
        }
    }

    tableBody.addEventListener('click', function (event) {
        const target = event.target.closest('button'); 
        if (!target) return; 

        const row = target.closest('tr');
        if (target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this row?')) {
                row.remove();
                updateIDs(); 
            }
        } else if (target.innerHTML.includes('fa-edit')) {
            const id = row.cells[0].textContent; 
            const name = row.cells[1].textContent;
            const email = row.cells[2].textContent;
            const role = row.cells[3].textContent;

            form.querySelector('input[type="text"]').value = name;
            form.querySelector('input[type="email"]').value = email;
            form.querySelector('select').value = role;

            form.querySelector('button[type="submit"]').textContent = 'Update Account';
            const accountIdInput = document.createElement('input');
            accountIdInput.type = 'hidden';
            accountIdInput.name = 'accountId';
            accountIdInput.value = id;
            form.appendChild(accountIdInput);
        }
    });

    function updateIDs() {
        const rows = tableBody.querySelectorAll('tr');
        rows.forEach((row, index) => {
            row.cells[0].textContent = index + 1; 
        });
    }
});
