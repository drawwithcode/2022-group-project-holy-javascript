function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  // put drawing code here
  background(255);
 
  
  // divide screen in 3
  line(0, height / 3, width, height / 3);
  line(0, height / 1.5, width, height / 1.5);

  if(windowWidth < 400){
    textSize(13)
  fill(0);
  textAlign(CENTER);
  text("How the computer perceives your voice", width / 2, height / 6);

  fill(0);
  textAlign(CENTER);
  text("How the computer makes it visually comprensible", width / 2, height / 2);
  text("Click to start", width / 2, height / 1.8);

  fill(0);
  textAlign(CENTER);
  text("The volume translated in colour", width / 2, height / 1.2);
  }
  else if(windowWidth > 400){
    textSize(30)
    fill(0);
    textAlign(CENTER);
    text("How the computer perceives your voice", width / 2, height / 6);
  
    fill(0);
    textAlign(CENTER);
    text("How the computer makes it visually comprensible", width / 2, height / 2);
    text("Click to start", width / 2, height / 1.8);
  
    fill(0);
    textAlign(CENTER);
    text("The volume translated in colour", width / 2, height / 1.2);
  }
}

function mouseClicked() {
  window.location.href = "index2.html";
}
