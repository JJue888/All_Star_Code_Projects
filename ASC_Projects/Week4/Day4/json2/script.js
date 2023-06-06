console.dir(randUser);

console.dir(randUser.results[0].name.first);

let profile = document.querySelector("#profile");

let newDiv = document.createElement("div");
let text = document.createElement("p");
let newImg = document.createElement("img");

text.innerHTML = "Name: " + randUser.results[1].name.first + " " + randUser.results[1].name.last + "<br>" + "Email: " + randUser.results[1].email;

newImg.src = randUser.results[1].picture.large;

newDiv.appendChild(newImg);
newDiv.appendChild(text);

profile.appendChild(newDiv)