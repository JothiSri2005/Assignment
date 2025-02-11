/* 2b.js - JavaScript for Event Handling */
document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("user-name").value;
    let email = document.getElementById("user-email").value;
    alert("Hello, " + name + "\nEmail: " + email);
});