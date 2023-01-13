function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  // put drawing code here
  background(255);
  stroke(0, 0, 0);
  strokeWeight(1);
  // divide screen in 3
  line(0, height / 3, width, height / 3);
  line(0, height / 1.5, width, height / 1.5);

  fill(0);
  textAlign(CENTER);
  text("How the computer perceives your voice", width / 2, height / 6);

  fill(0);
  textAlign(CENTER);
  text("How the computer makes it comprenseble to humans", width / 2, height / 2);

  fill(0);
  textAlign(CENTER);
  text("", width / 2, height / 1.2);
}

function mouseClicked() {
  window.location.href = "index2.html";
}
