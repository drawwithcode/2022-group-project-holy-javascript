var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start
  // put setup code here
}

function draw() {
  // put drawing code here
  var vol = mic.getlevel()
}
