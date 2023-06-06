let button = document.querySelector("button");

button.onclick = function(event){
    event.preventDefault();

    let newDiv = document.createElement("div");
    newDiv.style.border = "solid black 4px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";

    document.body.appendChild(newDiv);

    document.body.appendChild(newDiv);

    fetch("https://randomuser.me/api")
        .then(function(response){
            return response.json();
        })

        .then(function(myJson){
            console.log("Success");
            console.log(myJson);

            let newText = document.createElement("p");
            newText.innerHTML    = "My name is " + myJson.results[0].name.first + " " + myJson.results[0].name.last;
            newDiv.appendChild(newText);

            let userImage = document.createElement("img");
            userImage.src = myJson.results[0].picture.thumbnail;
            newDiv.prepend(userImage);

            if(myJson.results[0].gender == "male"){
                newDiv.style.background = "lightblue";
            }

            else {
                newDiv.style.background = "pink";
            }
        })
    
    fetch("https://dog.ceo/api/breeds/image/random/")
        .then(function(response){
            return response.json();
        })
        
        .then(function(myJson){
            console.log("Success");
            console.log(myJson);

            let dogImage = document.createElement("img");
            dogImage.src = myJson.message;
            dogImage.style.height = "50px";
            newDiv.appendChild(dogImage);
            newText.innerHTML = "This is my dog " + dogImage;
        })
}