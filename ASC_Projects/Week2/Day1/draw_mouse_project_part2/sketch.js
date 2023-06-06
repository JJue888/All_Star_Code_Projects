function setup(){

    createCanvas(500,500);
    background(255, 255 , 255);

}

function mouseClicked(){ 
     clear()
     let r = random(0,255);
     let g = random(0,255);
     let b = random(0,255);
     fill(r,b,g);
     line(250, 250, mouseX, mouseY);
   
}


function draw(){
     
    line(250, 250, mouseX, mouseY);

}
