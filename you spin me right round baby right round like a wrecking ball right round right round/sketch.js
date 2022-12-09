function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
    background(20);
    translate(width/2, height/2);
    
    
    push();
    rectMode(CENTER);
    rotate(millis() /1000);
    fill(0, 255, 100);
    rect(0, 0, 500, 500);
    fill(0, 175, 100);
    rectMode(CENTER);
    rect(0, 0, 400, 400);
    pop();
    
    push();
    rotate(millis () /1500)
    translate(500, 0);
    rotate(millis()/ 1500);
    fill(150, 150, 30);
    rect(0, 0, 100, 100);
    
    
    
    translate(200, 0);
    rotate(millis()/ 1500);
    fill(190, 190, 30);
    ellipse(0, 0, 60);
    pop();
    
    
    
    
    //fill(0, 100, 200,);
    //rect(0, 0, 10, 10);
    //rotate(millis());
    
    
}