let ball1;
let ball2;
let ball3;

function setup() {
    createCanvas(500, 500);

    ball1 = new Ball(150, 250, 255, 0, 0);
    ball2 = new Ball(250, 250, 0, 255, 0);
    ball3 = new Ball(350, 250, 0, 0, 255);
}

function draw() {
    background(0);

    fill(ball1.redValue, ball1.greenValue, ball1.blueValue);
    ellipse(ball1.xPos, ball1.yPos, 100, 100);

    fill(ball2.redValue, ball2.greenValue, ball2.blueValue);
    ellipse(ball2.xPos, ball2.yPos, 100, 100);

    fill(ball3.redValue, ball3.greenValue, ball3.blueValue);
    ellipse(ball3.xPos, ball3.yPos, 100, 100);
}

class Ball {
    constructor(x, y, r, g, b) {
        this.xPos = x;
        this.yPos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;
    }
}