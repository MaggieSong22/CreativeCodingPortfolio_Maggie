
function setup(){
    createCanvas(windowWidth,windowHeight);
    
    
}
function draw(){
    background(91, 191, 214, 40);
    if (mouseX<windowWidth/2){
        fill(0,255,0)
    }
    else{
        fill(255,0,0)
    }
    noStroke()
    rect(mouseX,mouseY,100,100,10)
    
}