let moveX = 0;
let moveY = 0;

function setup(){
    createCanvas(600,600)
    background(0)

    colorMode(HSB)
    
    rectMode(CENTER)
    angleMode(DEGREES)
    noFill();


}

function draw() {

    background(0);

    moveX = lerp(moveX, mouseX, 0.05);
    moveY = lerp(moveY, mouseY, 0.05);

    let angle = map(moveX, 0, width, 0, 180);
    let size = map(moveY, 0, height, 10, 55);

    for (let x = 0; x < 10; x++) {

        for (let y = 0; y < 10; y++) {

        push();

        translate(30+x*60, 30+y*60);

        stroke((x*25+y*10) % 360, 80, 100);

        rotate(angle+x*5+y*5);
        rect(0, 0, size);

        pop();
    }
    
  }


}