let mic;
let rectColorValueA;
let rectColorValueB;
let rectColorValueC;
let ypos = 1;
let ystep = 100;
let xpos = 1;
let xstep = 100;
let myFont;
let displayVolume;
function preload() {
  myFont = loadFont("assets/nimbus.ttf");
}

function getAccel() {
  DeviceMotionEvent.requestPermission().then((response) => {
    if (response == "granted") {
      console.log("accelerometer permission granted");
    }
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
  fft = new p5.FFT();

  let canvass = createCanvas(windowWidth, windowHeight);
  canvass.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  textAlign(CENTER);

  textFont(myFont);
}

function draw() {
  background(255);
  noStroke();

  //avvia microfono
  micLevel = mic.getLevel();

  //parte 1
  push();

  fill(0);
  newmicLevelA = map(micLevel, 0, 1, 0, 255);
  newmicLevelB = map(micLevel, 0, 1, 0, 0);
  newmicLevelC = map(micLevel, 0, 1, 255, 0);

  displayVolume = map(newmicLevelA, 0, 255, 0, 100);
  displayVolume -= 1;
  displayVolume = Math.abs(displayVolume);

  textSize(100);
  text(nfc(displayVolume, 0), width / 2, height / 5);

  pop();

  // parte 2
  push();
  fill(0);
  square(0, height / 3, width);
  fill(255);

  ellipse(width / 2, height / 2, width, displayVolume);
  pop();

  // parte 3
  push();

  rectColorValueA = newmicLevelA;
  rectColorValueB = newmicLevelB;
  rectColorValueC = newmicLevelC;

  fill(rectColorValueA, rectColorValueB, rectColorValueC);
  rect(0, height / 1.5, width, height / 1.5);

  pop();
}
