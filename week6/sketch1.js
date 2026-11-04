let sketch = 1;


let rows = 20;
let cols = 20;


let boxes = [];

let frames = [];
let Findex = 0;
let speed = 8;

let playing = true;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i<rows*cols; i++) {
    boxes[i] = 0

  }

  

  for (let i = 0; i<6; i++) {
    let flower = createGraphics(300, 300);
    flower.angleMode(DEGREES);
    flower.clear();


    flower.translate(150, 150);

    flower.noStroke();

    let petalLength = 15+i*11;
    let petalWidth = 10+i*3;

    flower.fill(255, 130, 175)

    for (let p = 0; p<8; p++) {
      flower.push();
      flower.rotate(p*45);


      flower.ellipse(0, -petalLength/2, petalWidth, petalLength);
      flower.pop();


    }

    flower.fill(255, 205, 65);
    flower.circle(0, 0, 26);

    frames.push(flower);
  }
}

function draw() {
  background(0);

  if (sketch == 1) {
    colorTrail();

  } else {
    drawFlower();
  }


  
}

function colorTrail(){
  let index = 0;
  let cellWidth = width/cols;

  let cellHeight = height/rows

  for (let x = 0; x<cols; x++) {

    for (let y = 0; y<rows; y++) {
      if (mouseX>x*cellWidth && mouseX<(x+1)*cellWidth && mouseY>y*cellHeight && mouseY<(y+1)*cellHeight) {
        

        boxes[index] = 255;
      }


      stroke(35);
      strokeWeight(1);
      fill(boxes[index], boxes[index]*x/cols, boxes[index]*y/rows)
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight)

      boxes[index]*=0.97;
      index++
    }
  }
}

function drawFlower(){
  
  if (playing && frameCount%speed == 0) {
    Findex++;

    if (Findex>=frames.length) {
      Findex = 0;

    }
  }

  imageMode(CENTER);
  image(frames[Findex], width/2, height/2)
  imageMode(CORNER);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);

  textSize(15);

  text('Frame '+(Findex+1)+' / '+frames.length+'    Speed: '+speed, width/2, height/2+195)
}

function keyPressed() {
  if (key == '1') {
    sketch = 1;
  }
  if (key == '2') {
    sketch = 2;
  }


  if (sketch == 2) {
    if (keyCode == LEFT_ARROW){
      speed = min(speed+2, 30); 
    }
    if (keyCode == RIGHT_ARROW){
      speed = max(speed-2, 2); 
    }
    if (key == ' ') {

      playing = !playing
      
    }
  }

  
  if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW || key == ' ') {
    return false;
    
  }


  
}