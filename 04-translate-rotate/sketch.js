// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  push(); //save the transformation matrix
  translate(100, 50);
  rotate(mouseY);
  rectMode(CENTER);
  rect(0, 0, 75, 25);
  pop(); //reset to last saved matrix

  rect(50, 200, 25, 200);
}
