//this is the landing page

let myFont;
let myFontitalic;

function preload() {
  myFont = loadFont("assets/nimbus.ttf");
  myFontitalic = loadFont("assets/nimbusitalic.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  textAlign(CENTER);
}

function draw() {
  background(255);
  fill(0);

  //if condition to make text responsive
  if (windowWidth < 400) {
    textSize(80);
    textFont(myFont);
    text("VOLUME", width / 2, height / 2 - height / 11);
    textSize(10);
    textFont(myFontitalic);
    text(
      "Volume refers to the variation of the sound measured in decibels. It can also be defined as the audio level to determine the loudness of the sound. The term can be used technically for instruments and instruments such as radio, television and other things.",
      //textAlign not working with uploaded font, so we used percentage to center the text
      width / 2 - width / 3.5,
      height / 2,
      (width * 3) / 5
    );
    //if condition to make text responsive
  } else if (windowWidth > 400) {
    textSize(150);
    textFont(myFont);
    text("VOLUME", width / 2, height / 2 - height / 11);
    textSize(30);
    textFont(myFontitalic);
    text(
      "<<Volume refers to the variation of the sound measured in decibels. It can also be defined as the audio level to determine the loudness of the sound. The term can be used technically for instruments and instruments such as radio, television and other things.>>",
      //textAlign not working with uploaded font, so we used percentage to center the text
      width / 2 - width / 3.5,
      height / 2,
      (width * 3) / 5
    );
  }
  //make the text blue to pop out more
  push();
  fill("blue");
  text("CLICK ANYWHERE", random(width), random(height));
  pop();
}

//redirect to another page when mouse is clicked or screen is touched
function mouseClicked() {
  window.location.href = "index2.html";
}
