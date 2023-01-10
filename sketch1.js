function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  // put drawing code here
  fill(0);
  circle(20, 30, 100);
  text("gughi porco dio", width / 2, height / 2);
}

function mouseClicked() {
  console.log("ciao");
  window.location.href = "index2.html";
}
