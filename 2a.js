/* 2a.js - JavaScript for DOM Manipulation */
document.getElementById("change-color").addEventListener("click", function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("color-box").style.backgroundColor = randomColor;
});

let itemCount = 1;
document.getElementById("add-item").addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "Item " + itemCount++;
    document.getElementById("item-list").appendChild(li);
});