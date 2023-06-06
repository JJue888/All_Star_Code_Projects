let hoverButton = document.querySelector("#hover");
let clearButton = document.querySelector("#clear");

let images = document.querySelector("#images");


hoverButton.onmouseover = function() {
    let newImage = document.createElement("img");
    newImage.src = "/images/charmander.png";

    images.appendChild(newImage);
}

hoverButton.onmouseout = function() {
    let newImage = document.createElement("img");
    newImage.src = "/images/squirtle.png";

    images.appendChild(newImage);
}

clearButton.onclick = function(event) {
    event.preventDefault();

    images.innerHTML = "";
}