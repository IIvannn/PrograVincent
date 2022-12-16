//let degwade;

let papaNoel;
let neige;

function preload(){
    papaNoel = loadImage("noel.png");
    neige = loadImage("neigeanim.gif");
}

function setup() {
  // put setup code here
     createCanvas(windowWidth, windowHeight);
    
}

function draw() {
  // put drawing code here
    background(14, 6, 40);
     fill (255);
    ellipse (200, 100, 130);

    fill (170, 200, 255);
    ellipse (200, 100, 120);
    
    
   //sparkles(200, 150, 5, 5);
   //sparkles(10, 10, 10, 10)
   
    
   let counter = 0;
   while(counter < 100){
        sparkles( 
      
            lerp(mouseX - 100, mouseX+100, noise(4, counter, millis()*0.03)), 
            lerp(mouseY - 7, mouseY+100, noise(5, counter, millis()*0.03)) , 
            5, 
            5
        );
       
        sparkles( 
            lerp(-width/2, 3*width/2, noise(1, counter)) , 
            noise (1,millis()*0.01, counter) * height, 
            3, 
            10
        );
       counter ++;
   }
    
    image(neige, mouseX-40, mouseY-20);
    image(neige, mouseX-50, mouseY-20);
    image(neige, mouseX-60, mouseY-20);
    image(neige, mouseX-70, mouseY-20);
    image(papaNoel, mouseX-40, mouseY-40, 90, 70);
    drawCity();
   
}

function sparkles(x, y, w, h) {
    push();
    stroke(255);
    translate(x, y);

     if(frameCount%12==0){
         line(-w/2, 0-1, w/2, 0);
     }else{
         line(0, -h/2, 0, h/2);
     }
    pop()
}

function drawCity(){
    fill (0);
    noStroke();
    rect(0, 600, windowWidth, 300);
    rect(1000, 450, 100, 400);
    rect(300, 550, 120, 400);
    rect(700, 350, 120, 400);
    rect(1200, 450, 120, 400);
    rect(600, 600, 120, 400);
    rect(950, 450, 120, 400);
    rect(100, 300, 120, 500);
    rect(400, 450, 120, 400);
    rect(0, 600, windowWidth, 300);
}

