//this is the explanation / speculation page

let myFont;

function preload() {
  myFont = loadFont("assets/nimbus.ttf");
}

function setup() {
  textAlign(CENTER);
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);
  //slow framerate in order to make the blue text noticeable, otherwise it is ultra-fast
  frameRate(1);
}

function draw() {
  background(255);
  fill(0);

  // divide screen in 3
  line(0, height / 3, width, height / 3);
  line(0, height / 1.5, width, height / 1.5);

  //if condition to make text responsive
  if (windowWidth < 400) {
    textSize(10);
    text("How the computer perceives your voice", width / 2, height / 6);
    text(
      "How the computer makes it visually comprensible",
      width / 2,
      height / 2
    );
    text("The volume translated in colour", width / 2, height / 1.2);
  } else if (windowWidth > 400) {
    textSize(30);
    //textAlign not working with uploaded font, so we used percentage to center the text
    text("VOLUME IS A NUMBER FOR THE MACHINE", width / 2, height / 6);
    text("VOLUME IS MORE LUCID TO HUMANS AS A SHAPE", width / 2, height / 2);
    text(
      "VOLUME IS EVEN MORE LUCID TO HUMANS AS A COLOUR",
      width / 2,
      height / 1.2
    );
  }
  //make the text blue to pop out more
  push();
  fill("blue");
  text("CLICK ANYWHERE", random(width), random(height));
  pop();
}

function mouseClicked() {
  window.location.href = "index3.html";
}
