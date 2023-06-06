// get reference for the button
let button = document.querySelector("button");

// setup onlick event
button.onclick = function(event) {
    event.preventDefault();

    // create a div to store our random profiles and dogs
    let newDiv = document.createElement("div");

    // styling the div
    newDiv.style.border = "solid black 4px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";

    // add element to the page
    document.body.appendChild(newDiv);

    // fetch data from first API
    fetch("https://randomuser.me/api")
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log("Success!");
            console.log(myJson);

            // depending on the gender the background color will be either pink or blue
            if (myJson.results[0].gender == "male") {
                newDiv.style.backgroundColor = "lightblue";
            }

            else {
                newDiv.style.backgroundColor = "pink";
            }

            // creating an element to display content
            let newText = document.createElement("p");

            // adding content to our element
            newText.innerHTML = " My name is " + myJson.results[0].name.first + " " + myJson.results[0].name.last + "." + " This is my dog:";

            // add element to the page
            newDiv.appendChild(newText);

            // creating an image 
            let userImage = document.createElement("img");

            // add a source to the image
            userImage.src = myJson.results[0].picture.thumbnail;

            // add element to the page
            newDiv.prepend(userImage);

        });

    // fetch data from second API
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log("Success!");
            console.log(myJson);

            // creating an image  
            let dogImage = document.createElement("img");

            // assigning source to the image
            dogImage.src = myJson.message;

            // styling the image
            dogImage.style.height = "50px";

            // adding the image to the page
            newDiv.appendChild(dogImage);               

        });

}
