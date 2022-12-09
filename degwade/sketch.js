function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(30, 5, 50);
    
    
   for(let counter = 0 ; counter < height ; counter++ ){
    let bulb = map(counter, 0, height, 0, 255)   
       
    stroke(bulb);
    line( 0, counter, width, counter);
   }
    
    
}