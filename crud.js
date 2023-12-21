function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

var selectedRow = null;

function onFormSubmit(event) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["password"] = document.getElementById("password").value;
    formData["contact"] = document.getElementById("contact").value;
    formData["Email"] = document.getElementById("Email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.password;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.contact;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Email;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>';
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('username').value = selectedRow.cells[0].innerHTML;
    document.getElementById('password').value = selectedRow.cells[1].innerHTML;
    document.getElementById('contact').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Email').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.password;
    selectedRow.cells[2].innerHTML = formData.contact;
    selectedRow.cells[3].innerHTML = formData.Email;
}

function resetForm() {
    document.getElementById("crudForm").reset();
    selectedRow = null;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

window.onload = function() {
    document.getElementById('crudForm').addEventListener('submit', onFormSubmit);
};
