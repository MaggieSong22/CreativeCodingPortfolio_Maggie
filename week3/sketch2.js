
function setup() {

    createCanvas(600, 600);
    rectMode(CENTER);
    colorMode(HSB);
    noFill();
    strokeWeight(2);
}

function draw() {
    background(0);

    for (let x = 0; x < 10; x++) {

        for (let y = 0; y < 10; y++) {

            let posX = 30+x*60;
            let posY = 30+y*60;

            let size = 10+x*3+y*3;

           
            size = size+mouseX*0.03;

            stroke((x*20+y*10+mouseY) % 360, 100, 100);

            rect(posX, posY, size, size);


            stroke((x*20+y*10+90) % 360, 100, 100);

            rect(posX, posY, size*0.7, size*0.7);
            stroke((x*20+y*10+180) % 360, 100, 100);

            rect(posX, posY, size*0.4, size*0.4);


            stroke(0, 0, 100);
            ellipse(posX, posY, size*0.2);

        }
    }


    
}