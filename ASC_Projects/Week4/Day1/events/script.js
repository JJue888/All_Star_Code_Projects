let firstButton = document.querySelector("#first");
let secondButton = document.querySelector("#second");
let thirdButton = document.querySelector("#third");

let header = document.querySelector("h3");
let body = document.querySelector("body");

firstButton.onclick = function() {
    header.innerHTML = "You clicked once";
    body.style.backgroundColor = "blue";
}

secondButton.ondblclick = function() {
    header.innerHTML = "You clicked twice";
    body.style.backgroundColor = "green";
}

thirdButton.onmouseover = function() {
    header.innerHTML = "You hover over button";
    body.style.backgroundColor = "red";
}