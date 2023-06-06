function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);

}

function draw() {

    background(0,0,0);
    noStroke();
    fill(255, 0, 0);
    square(mouseX,300,75);
    fill(0, 255, 0);
    square(mouseX,200,75);
    fill(0, 0, 255);
    square(mouseX,100,75);
    
}


function mouseClicked() {

    let r1 = random(0, 255);
    let g1 = random(0, 255);
    let b1 = random(0, 255);

    let r2 = random(0, 255);
    let g2 = random(0, 255);
    let b2 = random(0, 255);

    let r3 = random(0, 255);
    let g3 = random(0, 255);
    let b3 = random(0, 255);
}