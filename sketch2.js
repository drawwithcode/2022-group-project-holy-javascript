let mic;
var volhistory = [];
let binaryX = 0;
let binaryY = 0;
let rectColor = [];
let rectColorValueA;
let rectColorValueB;
let rectColorValueC;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  let canvass = createCanvas(windowWidth, windowHeight);
  canvass.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  textAlign(CENTER);
}

function draw() {
  background(255);
  stroke(0, 255, 0);
  strokeWeight(1);
  // divide screen in 3
  line(0, height / 3, width, height / 3);
  line(0, height / 1.5, width, height / 1.5);

  // parte 1
  micLevel = mic.getLevel();
  let x = height - micLevel * height;
  ellipse(x, height / 2, 10, 10);

  volhistory.push(micLevel);

  if (frameCount % 20 === 0) {
    binaryY += +12;
  }
  // text(volhistory, binaryX, binaryY);

  //parte 3
  newmicLevelA = map(micLevel, 0, 1, 0, 255);
  newmicLevelB = map(micLevel, 0, 1, 0, 0);
  newmicLevelC = map(micLevel, 0, 1, 255, 0);
  textSize(100);
  text(nfc(newmicLevelA, 4), width / 2, height / 5);

  rectColorValueA = newmicLevelA;
  rectColorValueB = newmicLevelB;
  rectColorValueC = newmicLevelC;

  fill(rectColorValueA, rectColorValueB, rectColorValueC);
  rect(0, height / 1.5, width, height / 1.5);
  console.log(rectColorValueA);
  console.log(rectColorValueB);
  console.log(rectColorValueC);
}
