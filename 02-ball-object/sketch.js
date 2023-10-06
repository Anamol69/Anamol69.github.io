// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theBall = spawnBall();
}

function draw() {
  background(220);
  moveBall();
  displayBall();
  keyTyped();
}

function keyTyped() {
  if (key === " ") {
    theBall = spawnBall();
  }
}

function spawnBall() {
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(15, 20),
    r: random(0, 255),
    g: random(0, 255), 
    b: random(0, 255),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  return theBall;
}

function moveBall() {
  theBall.x += theBall.dx;
  theBall.y += theBall.dy;
  
  // off the right side
  if (theBall.x - theBall.radius > width ) {
    theBall.x = 0 - theBall.radius;
  }
  // off the left side
  else if (theBall.x < 0 - theBall.radius) {
    theBall.x = width + theBall.radius;
  }
  //off the bottom
  if (theBall.y - theBall.radius > height) {
    theBall.y = 0 - theBall.radius;
  }
  //off the top
  else if (theBall.y < 0 - theBall.radius) {
    theBall.y = height + theBall.radius;
  }
  console.log(theBall.x, theBall.y);


}

function displayBall() {
  fill(theBall.r, theBall.g, theBall.b);
  circle(theBall.x, theBall.y, theBall.radius *2);
}

