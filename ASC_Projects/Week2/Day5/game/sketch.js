let yPos = 190;
let ballXPos = 250;
let ballYPos = 250;
let ballSpeed = 3;
let ballChangeX = -1;
let ballChangeY = 1;

let ballLeft;
let ballRight;
let ballTop;
let ballBottom;


function setup() {
    createCanvas(500, 500);
    noStroke();
}

function draw() {
    background(0);

    stroke(255);
    line(250, 0, 250, 500);


    fill(255, 0, 0);
    rect(30, yPos, 20, 100);


    fill(255);
    ellipse(ballXPos, ballYPos, 25, 25);

    ballTop = ballYPos - 12.5;
    ballBottom = ballYPos + 12.5;
    ballRight = ballXPos + 12.5;
    ballLeft = ballXPos - 12.5;


    ballXPos += ballSpeed * ballChangeX;
    ballYPos += ballSpeed * ballChangeY;
}