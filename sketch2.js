let mic;
var volhistory = [];
let binaryX = 0;
let binaryY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  let canvass = createCanvas(windowWidth, windowHeight);
  canvass.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  
  

  stroke(0, 255, 0);
  strokeWeight(1);
  // divide screen in 3
  line(0, height / 3, width, height / 3);
  line(0, height / 1.5, width, height / 1.5);

  micLevel = mic.getLevel();
  let x = height - micLevel * height;
  ellipse(x, height / 2, 10, 10);

  volhistory.push(micLevel);

  if (frameCount % 20 === 0) {
    binaryY += +12;
  }
  text(volhistory, binaryX, binaryY);

  console.log(frameCount);
}