let y = 0;
let w = 100, h=100;
let x;
let ySpeed = 10;
let xSpeed = 7;
let fillColor

function setup(){
    createCanvas(windowWidth,windowHeight)

    y = h/2
    x = width/2
   //rectMode(CENTER);
    strokeWeight(5);
    // background(0);
    fillColor = color(200,200,0)
}
function draw(){

    let bgColor = map(mouseX, 0, width, 0, 255);
  
    background(bgColor);
    stroke(225);
    fill(fillColor)

    ellipse(x,y,w,h);

    // y=y+10; 
    
    if(y>height - h/2){
         //y = -200;
         ySpeed = -ySpeed; // x = random(width)
         fillColor = color(random(255), random(255), random(255));
     }
     if(y < h/2){
        ySpeed = -ySpeed
        fillColor = color(random(255), random(255), random(255));
     }

     if(x>width - w/2){
         //y = -200;
         xSpeed = -xSpeed; // x = random(width)
         fillColor = color(random(255), random(255), random(255));
     }
     if(x < w/2){
        xSpeed = -xSpeed
        fillColor = color(random(255), random(255), random(255));
     }
    
     y += ySpeed
     x += xSpeed
    }