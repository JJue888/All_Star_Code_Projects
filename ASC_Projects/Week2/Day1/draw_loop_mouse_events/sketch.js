function setup() {
     createCanvas(500,500);
     background(0,0,0);


}


function mouseClicked() {
     let r = random(0,255);
     let g = random(0,255);
     let b = random(0,255);
     fill(r,b,g);
     let a = random(25,100);

     ellipse(mouseX, mouseY, a, a);

}


