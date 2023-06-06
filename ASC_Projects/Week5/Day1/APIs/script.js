fetch("https://randomuser.me/api")
    .then(function(response) {
        return response.json();        
    })
    .then(function(myJson) {
        console.log(myJson);

        let body = document.querySelector("body");
        body.style.backgroundColor = "lightblue";

        let firstname = myJson.results[0].name.first;
        let lastname = myJson.results[0].name.last;
        let phonenumber = myJson.results[0].phone;
        let imgURL = myJson.results[0].picture.large;

        let fullname = firstname + " " + lastname;

        console.log(fullname);

        let newHeader = document.createElement("h1");
        let newImage = document.createElement("img");
        let newP = document.createElement("p");

        newHeader.innerHTML = "Random User: ";
        newImage = imgURL;
        newP.innerHTML = "My name is " + fullname + "<br>" + "My phone number is " + phonenumber;
        body.appendChild(newHeader);
        body.appendChild(newImage);
        body.appendChild(newP);
    });
