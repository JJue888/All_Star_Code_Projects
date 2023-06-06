let ballArray = [];
let pointer;

function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < 100; i++) {
        let temp = new Ball(random(0, 500), 250, random(0, 255), random(0, 255), random(0, 255), random(2, 5), random(25, 50));
        ballArray.push(temp);
    }
}

function draw() {
    background(0);
    noStroke();

    for (let i = 0; i < ballArray.length; i++){
        fill(ballArray[i].redValue, ballArray[i].greenValue, ballArray[i].blueValue);
        ellipse(ballArray[i].xPos, ballArray[i].yPos, ballArray[i].sizeValue, ballArray[i].sizeValue);

        ballArray[i].yPos += ballArray[i].speedValue;

        if(ballArray[i].yPos > 525) {
            ballArray[i].yPos = -25;
        }
    }
}

function mouseClicked() {
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 20, 20);
}


class Ball {
    constructor(x, y, r, g, b, speed, size) {
        this.xPos = x;
        this.yPos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;
        this.speedValue = speed;
        this.sizeValue = size;
    }
}