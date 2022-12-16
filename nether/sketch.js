function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
  // put drawing code here
    background(0);
    fill(150, 0, 180);
    rect(100, 100, width - 2 * 100, height - 2 * 100);
    
    fill(150, 0, 200);
    textAlign(CENTER, CENTER);
    textSize(50)
    text("nether noises", width/2, 20);
}



function windowResize(){

resizeCanvas (windowWidth, windowHeight);
    
}