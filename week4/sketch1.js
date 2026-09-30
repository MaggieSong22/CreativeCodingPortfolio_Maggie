function setup() {
    createCanvas(576, 384, SVG);
  
    angleMode(DEGREES);
  
    noFill();
    stroke(0);
    strokeWeight(1);
  }
  
function draw() {
    background(255);
  
    let angle = map(mouseX, 0, width, 0, 45);
    let petal = map(mouseY, 0, height, 15, 35);

    for (let x = 50; x < width - 50; x += 65) {
        for (let y = 50; y < height - 50; y += 65) {
  
        push();
  

        translate(x, y);
        rotate(angle+y*0.05);

        for (let i = 0; i < 8; i++) {
  
          push();
          rotate(i*45);
  


          ellipse(15, 0, petal, 12);

          pop();
        }

        ellipse(0, 0, 15, 15);
  
  
        pop();
        
      }
    }


  }
  function keyPressed() {
    if (key == 's') {
      save("flower.svg");
    }
  }