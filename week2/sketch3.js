let col, col1, col2
let lastY = 0
let down = true;
let smallWidth

function setup(){
    
    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER);

    col1 = color(0,200,255);
    col2 = color(255,100,0);
    background(0)
    noStroke();

}
function draw(){
    if (mouseY > lastY) {
        down = true
      } else {
        down = false;
      }

    let val = map(mouseY,0,height,0,1)
    
    col = lerpColor(col1,col2,val)
    fill(col)

    rect(width/2, mouseY, width , 40);

    if (down){
        smallWidth = map(mouseY, 0, height, width/10, width/2)
      } else {
        smallWidth = map(mouseY, 0, height, width/2, width/10)

    }
    
    col = lerpColor(col2, col1,val)
    fill(col)

    rect(width/2, mouseY, smallWidth , 40)

    
    
    

    lastY = mouseY
}
