let col1,col2
function setup(){
    
    createCanvas(windowWidth, windowHeight)
    background(0)
    strokeWeight(2)
    col1 = color(0,200,255);
    col2 = color(255,0,0);
   

}
function draw(){
   
    
}

function mouseDragged() {
     
    let val = map(mouseY,0,width,0,1)
    
    col = lerpColor(col1,col2,val)
    stroke(col)

   line(pmouseX,pmouseY,mouseX,mouseY)
}
// function mouseClicked(){
    //background(255)
// }
function keyPressed() {

    if (key === 'e') {
        background(255)
    // Code to run.
  }

    
}