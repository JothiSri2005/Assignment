/* 2c.js - JavaScript for Arrays */
let students = [];
function addStudent() {
    let nameInput = document.getElementById("student-name");
    let name = nameInput.value.trim();
    if (name !== "") {
        students.push(name);
        nameInput.value = "";
        displayStudents();
    } else {
        alert("Please enter a valid name.");
    }
}

function displayStudents() {
    let list = document.getElementById("student-list");
    list.innerHTML = "";
    students.forEach((student, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${student}`;
        list.appendChild(li);
    });
}
