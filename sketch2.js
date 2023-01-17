let mic;
let rectColorValueA;
let rectColorValueB;
let rectColorValueC;
let ypos = 1;
let ystep = 100;
let xpos = 1;
let xstep = 100;

let displayVolume;

function getAccel(){
  DeviceMotionEvent.requestPermission().then(response => {
      if (response == 'granted') {
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
}


function draw() {
  background(255);
  noStroke();

  //avvia microfono
  micLevel = mic.getLevel();

  // // divide screen in 3

  // line(0, height / 3, width, height / 3);
  // line(0, height / 1.5, width, height / 1.5);

  //parte 1
  push();
  // stroke(255);
  fill(0)
  newmicLevelA = map(micLevel, 0, 1, 0, 255);
  newmicLevelB = map(micLevel, 0, 1, 0, 0);
  newmicLevelC = map(micLevel, 0, 1, 255, 0);
  
  displayVolume = map(newmicLevelA, 0, 255, 0, 100);
  displayVolume -= 1;
  displayVolume = Math.abs(displayVolume);
  
  
    textSize(100);
  text(nfc(displayVolume, 0), width / 2, height / 5);

  // for (let j = 0; j < height/3; j++) {
  //   for (let i = 0; i < width; i++) {
  //     text(nfc(displayVolume, 2), xpos+(xstep*i), ypos+(ystep*j));
      
  //   }
  // }
  pop();
  
  

  // parte 2
  push();
  fill(0);
  square(0, height / 3, width);
  fill(255);

  ellipse(width / 2, height / 2, width, displayVolume);
  pop();

  // //WAVEFORM
  // let spectrum = fft.analyze();
  // noStroke();
  // fill(255, 0, 255);
  // for (let i = 0; i < spectrum.length; i++) {
  //   let x = map(i, 0, spectrum.length, 0, width);
  //   let h = -height + map(spectrum[i], 0, 255, height, 0);
  //   rect(x, height, width / spectrum.length, h);
  // }

  // let waveform = fft.waveform();
  // noFill();
  // beginShape();
  // stroke(20);
  // for (let i = 0; i < waveform.length; i++) {
  //   let x = map(i, 0, waveform.length, 0, width);
  //   let y = map(waveform[i], -1, 1, 0, height);
  //   vertex(x, y);
  // }
  // endShape();

  // parte 3
  push();

  rectColorValueA = newmicLevelA;
  rectColorValueB = newmicLevelB;
  rectColorValueC = newmicLevelC;

  fill(rectColorValueA, rectColorValueB, rectColorValueC);
  rect(0, height / 1.5, width, height / 1.5);

  
  pop();

  
}
