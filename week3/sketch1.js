
let r = 0;

let x1, y1, x2, y2;

let x1Speed = 5;
let y1Speed = 4;
let x2Speed = 2;
let y2Speed = 3;

let size = 150;
let radius = size*Math.SQRT2/2;

function setup(){
    createCanvas(windowWidth,windowHeight)
  
    rectMode(CENTER)
    angleMode(DEGREES)

    stroke(255)
    strokeWeight(2)
    noFill()

    x1 = width/3;
    y1 = height/3;
    x2 = width*2/3;
    y2 = height*2/3;
}

function draw() {
    background(0);

    x1 += x1Speed;
    y2 += y2Speed;
    x2 += x2Speed;
    y1 += y1Speed;

    if (x1 < radius || x1 > width-radius) {
      x1Speed = -x1Speed;
      x1 = constrain(x1, radius, width-radius);
    }
  
    if (y1 < radius || y1 > height-radius) {
      y1Speed = -y1Speed;
      y1 = constrain(y1, radius, height-radius);
    }
    if (x2 < radius || x2 > width-radius) {
      x2Speed = -x2Speed;
      x2 = constrain(x2, radius, width-radius);
    }
  
    if (y2 < radius || y2 > height - radius) {
      y2Speed = -y2Speed;
      y2 = constrain(y2, radius, height-radius);
    }

    let d = dist(x1, y1, x2, y2);
    if (d < radius*2) {

        let tempX = x1Speed;
        let tempY = y1Speed;
        x1Speed = x2Speed;
        y1Speed = y2Speed;
        x2Speed = tempX;
        y2Speed = tempY;
    }
    push();

    translate(x1, y1);
    rotate(r);

    rect(0, 0, size, size);

    pop();

    push();

    translate(x2, y2);
    rotate(-r);

    rect(0, 0, size, size);

    pop();

    r++;
}

