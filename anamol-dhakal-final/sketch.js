// Final project
// Anamol Dhakal
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let thing = [];

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 25;
  }
  move() {
    this.x +- random(1, 25);
    this.y +- random(1, 25);
    if (this.x > windowHeight || this.x > windowWidth) {
    }
  }

  display() {
    circle(255, (255, 25));
  }

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  thing.push(Ball); thing.push(Ball); thing.push(Ball); thing.push(Ball); thing.push(Ball);
}

function draw() {
  background(220);
  let circles = new Ball;
  circles.display();
  circles.move();

}

function mousePressed() {
  thing.push(Ball);
  circles.display();
}