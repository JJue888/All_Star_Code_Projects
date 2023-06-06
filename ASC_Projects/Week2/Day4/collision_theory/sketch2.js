let charmanderImage;
let bulbasaurImage;
let squirtleImage;

let charmanderSound;
let bulbasaurSound;
let squirtleSound;

function preload() {
    charmanderImage = loadImage("images/charmander.png");
    bulbasaurImage = loadImage("images/bulbasaur.png");
    squirtleImage = loadImage("images/squirtle.png");

    charmanderSound = loadSound("sounds/charmander_sound.mp3");
    bulbasaurSound = loadSound("sounds/bulbasaur_sound.mp3");
    squirtleSound = loadSound("sounds/squirtle_sound.mp3");
}

function setup() {
    createCanvas(500, 500);
    background(0);
    noStroke();
 }
  
 function draw() {
    fill(255, 0, 0);//red box
    rect(100, 200, 100, 100);

    fill(0, 255, 0); //green box
    rect(200, 200, 100, 100);

    fill(0, 0, 255); //blue box
    rect(300, 200, 100, 100);

    image(charmanderImage, 100, 200, 100, 100);
    image(bulbasaurImage, 200, 200, 100, 100);
    image(squirtleImage, 300, 200, 100, 100);
 }
 
 function mouseClicked() {
     
    //red box
    if (mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300 ) {
        charmanderSound.play();
    }

    else if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300 ) {
        bulbasaurSound.play();
    }

    else if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300 ) {
        squirtleSound.play();
    }
 }