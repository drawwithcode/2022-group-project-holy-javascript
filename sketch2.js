let mic;
let rectColorValueA;
let rectColorValueB;
let rectColorValueC;

let displayVolume;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(14);
  fft = new p5.FFT();
  // put setup code here
  let canvass = createCanvas(windowWidth, windowHeight);
  canvass.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  textAlign(CENTER);
}

function draw() {
  background(255);

  //avvia microfono
  micLevel = mic.getLevel();

  // // divide screen in 3

  // line(0, height / 3, width, height / 3);
  // line(0, height / 1.5, width, height / 1.5);

  //parte 1
  push();
  stroke(255);
  newmicLevelA = map(micLevel, 0, 1, 0, 255);
  newmicLevelB = map(micLevel, 0, 1, 0, 0);
  newmicLevelC = map(micLevel, 0, 1, 255, 0);
  textSize(100);

  displayVolume = map(newmicLevelA, 0, 255, 0, 100);
  displayVolume -= 1;
  displayVolume = Math.abs(displayVolume);
  text(nfc(displayVolume, 0), width / 2, height / 5);
  pop();

  // parte 2
  push();
  fill(0);

  rect(0, height / 1.5, width, height / 3);
  fill(255);
  ellipse(width / 2, height / 2, width, displayVolume);
  pop();

  //parte 3
  push();

  rectColorValueA = newmicLevelA;
  rectColorValueB = newmicLevelB;
  rectColorValueC = newmicLevelC;

  fill(rectColorValueA, rectColorValueB, rectColorValueC);
  rect(0, height / 1.5, width, height / 1.5);

  console.log(rectColorValueA);
  console.log(rectColorValueB);
  console.log(rectColorValueC);
  pop();
}
