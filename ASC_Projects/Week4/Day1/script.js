// let message = "You've been hacked";

// alert(message);

let firstHeader = document.querySelector("h1");


console.log("HTML Element");
console.log(firstHeader);
console.log("JavaScript")
console.log(firstHeader);

firstHeader.style.color = "blue";
firstHeader.style.backgroundColor = "rgb(255,255,0)";
firstHeader.style.fontSize = "50px";

let secondHeader = document.querySelector("#second");

secondHeader.style.backgroundColor = "rgb(58, 244, 84)";
secondHeader.style.textDecoration = "underline";

let thirdHeader = document.querySelector("#third");

thirdHeader.style.backgroundColor = "rgb(34,56,32)";

let textElements = document.querySelectorAll("text");
console.log(textElements);
console.log("looping");
