// this is the actual "translation" sketch

let mic;
let rectColorValueA;
let rectColorValueB;
let rectColorValueC;
let myFont;
let displayVolume;
function preload() {
  myFont = loadFont("assets/nimbus.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  //initialize the mic input
  mic = new p5.AudioIn();
  mic.start();
  textAlign(CENTER);
  textFont(myFont);
}

function draw() {
  background(255);
  noStroke();

  //initialize mic
  micLevel = mic.getLevel();

  //NUMBER
  push();

  fill(0);

  newmicLevelA = map(micLevel, 0, 1, 0, 255);
  newmicLevelB = map(micLevel, 0, 1, 0, 0);
  newmicLevelC = map(micLevel, 0, 1, 255, 0);

  displayVolume = map(newmicLevelA, 0, 255, 0, 100);
  displayVolume -= 1;
  displayVolume = Math.abs(displayVolume);
  displayVolume += 1;

  textSize(100);
  text(nfc(displayVolume, 0), width / 2, height / 5);

  pop();

  //SHAPE
  push();
  fill(0);
  square(0, height / 3, width);
  fill(255);

  ellipse(width / 2, height / 2, width, displayVolume * 4.7);
  pop();

  //COLOUR
  push();

  rectColorValueA = newmicLevelA;
  rectColorValueB = newmicLevelB;
  rectColorValueC = newmicLevelC;

  fill(rectColorValueA, rectColorValueB, rectColorValueC);
  rect(0, height / 1.5, width, height / 1.5);

  pop();
}
