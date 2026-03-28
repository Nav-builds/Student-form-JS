function saveData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : '';
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;

    if (!name || !age || !email || !gender) {
        alert("Please fill all required fields (Name, Age, Email, Gender).");
        return;
    }

    const tableBody = document.querySelector("#dataTable tbody");
    const row = document.createElement("tr");

    
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

    tableBody.appendChild(row);

    // Clear inputs
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('email').value = "";
    document.getElementById('course').value = "";
    if (genderInput) {
        genderInput.checked = false;
    }
}

// Event listener for delete buttons 
document.addEventListener('click', function(event) {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('deleteBtn')) {
        
        const rowToDelete = event.target.closest('tr');
        if (rowToDelete) {
            rowToDelete.remove(); 
        }
    }
});