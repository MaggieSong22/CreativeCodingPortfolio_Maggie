
let r = 0;

let x, y;

let xSpeed = 5;
let ySpeed = 4;

let size = 80;
let radius = size*Math.SQRT2/2;

function setup(){
    createCanvas(windowWidth,windowHeight)
  
    rectMode(CENTER)
    angleMode(DEGREES)

    stroke(255)
    strokeWeight(2)
    noFill()

    x = width/2;
    y = height/2;
}

function draw() {
    background(0);

    x += xSpeed;
    y += ySpeed;

    if (x < radius) {
        xSpeed = -xSpeed;
        x = radius;
    }

    if (x > width-radius) {
        xSpeed = -xSpeed;
        x = width-radius;
    }

    if (y < radius) {
        ySpeed = -ySpeed;
        y = radius;
    }

    if (y > height-radius) {
        ySpeed = -ySpeed;
        y = height-radius;
    }

    push();
    translate(x, y);


    rotate(r);

    rect(0, 0, size, size);

    pop();
    r++;

    
}