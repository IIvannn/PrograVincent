let degwade;



function setup() {
    createCanvas(windowWidth, windowHeight);
    degwade = cirgrad(width, height, 20, 6, 20, 80, 60, 8); 
}

function draw() {
    //background(
        //lerp(100, 150, noise(1, millis()*0.0001)),
        //lerp(50, 150, noise(2, millis()*0.0001)),
        //lerp(5, 0, noise(3, millis()*0.0001))
    
    background(255);

    image(degwade, 0, 0, width, height);
    
    
}

function lingrad(w, h, ra, ga, ba, rb, gb, bb){   
let graphic = createGraphics(w, h);
    
    for(let counter = 0 ; counter < h ; counter++ ){
    let red = map(counter, 0, height, ra, rb);   
    let gre = map(counter, 0, height, ga, gb);
    let blu = map(counter, 0, height, ba, bb);
    
    graphic.stroke(red, gre, blu);
    graphic.line( 0, counter, w, counter);
       
    
   }
    return graphic;
}



function cirgrad(w, h, ra, ga, ba, rb, gb, bb){   
let graphic = createGraphics(w, h);
    
    h = h*3
    
    for(let counter = 0 ; counter < h ; counter++ ){
    let red = map(counter, 0, height, ra, rb);   
    let gre = map(counter, 0, height, ga, gb);
    let blu = map(counter, 0, height, ba, bb);
    
    graphic.fill(red, gre, blu);
    graphic.noStroke();   
    graphic.ellipse( w/2, 0, h-counter, h-counter);
       
    
   }
    return graphic;
    
    background(14, 6, 40);
    stroke(255);
    
   //sparkles(200, 150, 5, 5);
   //sparkles(10, 10, 10, 10)
   
   let counter = 0;
   while(counter < 5s00){
    
       
   sparkles(noise(1, counter) * width, noise (1,millis()*0.0001, counter) * height, 5, 5);
       counter ++;
   }
}

function sparkles(x, y, w, h) {
push();
    
translate(x, y);
    
 if(frameCount%12==0){
     line(-w/2, 0-1, w/2, 0);
 }else{
     line(0, -h/2, 0, h/2);
 }
pop()
}


