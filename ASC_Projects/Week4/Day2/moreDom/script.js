let addButton = document.querySelector("#add-button");
let removeButton = document.querySelector("#remove-button");
let clearButton = document.querySelector("#clear-button")

let newImage = document.createElement("img");

addButton.onclick = function() {
    newImage.src = "images/charmander.jpg";

    images.appendChild(newImage);
}

removeButton.onclick = function() {
    images.removeChild(images.firstChild);
}

clearButton.onclick = function() {
    images.innerHTML = "";
}