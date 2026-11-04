
let frames = [];
let Findex = 0;
let speed = 8;

let playing = true;
let glitchOn = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1)

  for (let i = 0; i<6; i++) {
    let flower = createGraphics(300, 300);
    flower.angleMode(DEGREES);
    flower.clear();


    flower.translate(150, 150);

    flower.noStroke();

    let len = 30+i*18;
    let w = 15+i*5;
    let mouth = 20+i*12;


    for (let p = 0; p<5; p++) {
      flower.push();
      flower.rotate(p*72);

      flower.noStroke();

      flower.fill(90, 15, 25)

      flower.beginShape();
      flower.vertex(0, 8);
      flower.bezierVertex(-w*1.5, -len*0.2, -w, -len*0.8, 0, -len);
      flower.bezierVertex(w, -len*0.8, w*1.5, -len*0.2, 0, 8);
      flower.endShape(CLOSE);


      flower.fill(160, 45, 55)

      flower.beginShape();
      flower.vertex(0, 0);
      flower.bezierVertex(-w*0.8, -len*0.2, -w*0.5, -len*0.7, 0, -len*0.85);
      flower.bezierVertex(w*0.5, -len*0.7, w*0.8, -len*0.2, 0, 0);
      flower.endShape(CLOSE);


      flower.stroke(65, 5, 15);
      flower.strokeWeight(1);

      for (let k = -2; k<=2; k++) {
        flower.line(0, -5, k*4, -len*0.75);
      }


      flower.noStroke();
      flower.fill(225, 215, 190);

      for (let t = 0; t<4; t++) {
        let y = -len*(0.25+t*0.16);

        flower.triangle(-w*0.5-3, y, -w*0.5+3, y, -w*0.5+5, y-10);
        flower.triangle(w*0.5-3, y, w*0.5+3, y, w*0.5-5, y-10);

      }

      flower.pop();

    }


    flower.noStroke();
    flower.fill(5, 1, 3);
    flower.circle(0, 0, mouth*1.4);

    flower.fill(45, 3, 10);
    flower.circle(0, 0, mouth);


    for (let t = 0; t<22; t++) {
      flower.push();
      flower.rotate(t*360/22);
      flower.translate(0, -mouth*0.62);

      flower.fill(225, 215, 190);
      flower.triangle(-3, 0, 3, 0, 0, 12);

      flower.pop();
    }


    for (let t = 0; t<15; t++) {
      flower.push();
      flower.rotate(t*360/15);
      flower.translate(0, -mouth*0.35);

      flower.fill(220, 210, 185);
      flower.triangle(-2, 0, 2, 0, 0, 8);

      flower.pop();
    }


    flower.fill(0);
    flower.circle(0, 0, mouth*0.3);

    frames.push(flower);
  }
}

function draw() {
  background(0);

  drawFlower();

}

function drawFlower(){

  loadPixels();

  let px = pixels;
  let index = 0;

  for (let y = 0; y<height; y++) {
    for (let x = 0; x<width; x++) {

      let wave = sin(map(x,0,width,0,PI*10)+frameCount*0.08);
      let noise = random(-15,15);

      px[index] = constrain(20+wave*10+noise,0,255)
      px[index+1] = 3
      px[index+2] = 5
      px[index+3] = 255;

      index+=4;
    }
  }

  updatePixels();


  if (playing && frameCount%speed == 0) {
    Findex++;

    if (Findex>=frames.length) {
      Findex = 0;

    }
  }

  //let flowerSize = 1.5
  let pulse = 1+sin(frameCount*0.04)*0.02

  push();
  translate(width/2, height/2);
  scale(pulse);

  imageMode(CENTER);
  image(frames[Findex], 0, 0)
  pop();

  if (glitchOn && Findex>=3 && random(1)<0.35) {
    glitch();
  }


}


function glitch(){
    loadPixels();
  
    let px = pixels;
    let oldPx = [...px];
  
    for (let b = 0; b<10; b++) {
      let startY = floor(random(height));
      let bandH = floor(random(3,25));
      let shift = floor(random(-90,90));
  
  
      for (let y = startY; y<min(startY+bandH,height); y++) {
  
        for (let x = 0; x<width; x++) {
  
          let sourceX = (x+shift+width)%width;
          let index = (x+y*width)*4;
          let sourceIndex = (sourceX+y*width)*4;
          let redX = (sourceX+12)%width;
          let blueX = (sourceX+width-12)%width;
          let redIndex = (redX+y*width)*4;
          let blueIndex = (blueX+y*width)*4;
  
  
          px[index] = oldPx[redIndex]
          px[index+1] = oldPx[sourceIndex+1]
          px[index+2] = oldPx[blueIndex+2]
          px[index+3] = 255;
  
        }
      }
    }
  
    updatePixels();
  }
  

function keyPressed() {
  if (keyCode == LEFT_ARROW){
    speed = min(speed+2, 30);
  }
  if (keyCode == RIGHT_ARROW){
    speed = max(speed-2, 2);
  }
  if (key == ' ') {

    playing = !playing

  }
  if (key == 'g') {

    glitchOn = !glitchOn

  }


  if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW || key == ' ') {
    return false;

  }


}
