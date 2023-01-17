function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  // put drawing code here
  fill(0); 
  
  //responsive text
  if(windowWidth< 400){
  textAlign(CENTER);
  textSize (15)
  text("Code your voice", width / 2, height / 2);
  
  text("Click for explanation", width / 2, height / 1.8);
  }
  else if(windowWidth> 400){
    textAlign(CENTER);
  textSize (30)
  text("Code your voice", width / 2, height / 2);
  
  text("Click for explanation", width / 2, height / 1.8);
  }
}

function mouseClicked() {
  window.location.href = "index3.html";
}
