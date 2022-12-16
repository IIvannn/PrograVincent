let = degwade;



function setup() {
    createCanvas(windowWidth, windowHeight);
    
    degwade = createGraphics(width, height);
    
    for(let counter = 0 ; counter < height ; counter++ ){
    let red = map(counter, 0, height, 50, 0);   
    let gre = map(counter, 0, height, 25, 190);
    let blu = map(counter, 0, height, 90, 175);
    
    degwade.stroke(red, gre, blu);
    degwade.line( 0, counter, width, counter*6);
       
   }
}

function draw() {
    background(
        lerp(100, 150, noise(1, millis()*0.0001)),
        lerp(50, 150, noise(2, millis()*0.0001)),
        lerp(5, 0, noise(3, millis()*0.0001))
    );
    image(degwade, 0, 0, width, height);
    
   
    
    
}