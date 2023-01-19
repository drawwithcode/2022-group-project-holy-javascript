let myFont;
let myFontitalic;

function preload() {
  myFont = loadFont("assets/nimbus.ttf");
  myFontitalic = loadFont("assets/nimbusitalic.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER);
}

function draw() {
  fill(0);

  text("ciao", 20, 20);

  //responsive text
  if (windowWidth < 400) {
    textSize(80);
    textFont(myFont);
    text("VOLUME", width / 2, height / 2 - height / 11);
    textSize(10);
    textFont(myFontitalic);
    text(
      "Volume refers to the variation of the sound measured in decibels. It can also be defined as the audio level to determine the loudness of the sound. The term can be used technically for instruments and instruments such as radio, television and other things.",
      width / 2 - width / 3.5,
      height / 2,
      (width * 3) / 5
    );
  } else if (windowWidth > 400) {
    textSize(80);
    textFont(myFont);
    text("VOLUME", width / 2, height / 2 - height / 11);
    textSize(30);
    textFont(myFontitalic);
    text(
      "<<Volume refers to the variation of the sound measured in decibels. It can also be defined as the audio level to determine the loudness of the sound. The term can be used technically for instruments and instruments such as radio, television and other things.>>",
      width / 2 - width / 3.5,
      height / 2,
      (width * 3) / 5
    );
  }
}

function mouseClicked() {
  window.location.href = "index2.html";
}
