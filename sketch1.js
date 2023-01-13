function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  // put drawing code here
  fill(0);
  textAlign(CENTER);
  text("Code your voice", width / 2, height / 2);
  text("Click to start", width / 2, height / 1.8);
}

function mouseClicked() {
  window.location.href = "index3.html";
}
