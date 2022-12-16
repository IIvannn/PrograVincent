

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
    background(14, 6, 40);
    stroke(255);
    
   //sparkles(200, 150, 5, 5);
   //sparkles(10, 10, 10, 10)
   
   let counter = 0;
   while(counter < 1000){
    
       
   sparkles(noise(1, counter) * width, noise (1,millis()*0.0001, counter) * height, 5, 5);
       counter ++;
   }
}

function sparkles(x, y, w, h) {
push();
    
translate(x, y);
    
 if(frameCount%12==0){
     line(-w/2, 0, w/2, 0);
 }else{
     line(0, -h/2, 0, h/2);
 }
pop()
}

