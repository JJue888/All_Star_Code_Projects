let button = document.querySelector("button");
let pikachu = document.querySelector("img");

button.onclick = function(event) {
    event.preventDefault();

    pikachu.animation = "moveRight 1s 2s linear infinite"
}