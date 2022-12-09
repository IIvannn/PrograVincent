let papaNoel

function preload(){
 papaNoel = loadImage("kream.png");
    //myfav = loadImage("kartt.png");
    //myfav = loadImage("noel.png");
}

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
    background(130, 40, 85); 
    
    
    //translate (width/2, height/2);
    
    image(papaNoel, mouseX, mouseY, 400, 600);
}

