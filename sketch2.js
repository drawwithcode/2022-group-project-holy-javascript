let myFont;

function preload() {
  myFont = loadFont("assets/nimbus.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);

  frameRate(1);
  // put setup code here
}

function draw() {
  // put drawing code here
  background(255);

  // divide screen in 3
  line(0, height / 3, width, height / 3);
  line(0, height / 1.5, width, height / 1.5);

  if (windowWidth < 400) {
    textSize(10);
    fill(0);
    textAlign(CENTER);
    text("How the computer perceives your voice", width / 2, height / 6);

    fill(0);
    textAlign(CENTER);
    text(
      "How the computer makes it visually comprensible",
      width / 2,
      height / 2
    );

    fill(0);
    textAlign(CENTER);
    text("The volume translated in colour", width / 2, height / 1.2);
  } else if (windowWidth > 400) {
    textSize(30);
    fill(0);
    textAlign(CENTER);
    text("How the computer perceives your voice", width / 2, height / 6);

    fill(0);
    textAlign(CENTER);
    text(
      "How the computer makes it visually comprensible",
      width / 2,
      height / 2
    );

    fill(0);
    textAlign(CENTER);
    text("The volume translated in colour", width / 2, height / 1.2);
  }
  push();
  fill("blue");
  text("CLICK ANYWHERE", random(width), random(height));
  pop();
}

function mouseClicked() {
  window.location.href = "index3.html";
}
