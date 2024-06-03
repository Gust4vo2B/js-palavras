function setup() {
    background("white");
    createCanvas(600, 600);
  }
  
  function draw() {
    
    stroke ("red");
    fill ("blue");
   
    
    //console.log (mouseIsPressed);
    
     
    if (mouseIsPressed) {
    rect (mouseX, mouseY, 50, 60);
    }
  }
  
  
  