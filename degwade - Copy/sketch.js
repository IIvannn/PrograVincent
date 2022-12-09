let degwade;



function setup() {
    createCanvas(windowWidth, windowHeight);
    degwade = cirgrad(width, height, 150, 50, 0, 150, 110, 50); 
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
}


