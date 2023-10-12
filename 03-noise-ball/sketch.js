// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  spawnBall();
  //spawn a new ball every half second
  window.setInterval(spawnBall, 0);
}

function draw() {
  background("white");
  spawnBall();
  for (let theBall of ballArray) {
    fill(theBall.color);
    //move
    theBall.x = noise(theBall.time) * width;
    theBall.y = noise(theBall.time + 300) * height;
    //display 
    circle(theBall.x, theBall.y, theBall.size);
    theBall.time += 0.01;
  }

  textSize(40);
  fill("black");
  text(Math.floor(frameRate()), 50, 50);

}

function spawnBall() {
  let ball = {
    x: random(width),
    y: random(height),
    size: random(10, 50),
    color: color(random(255), random(255), random(255), random(255)),
    time: random(1000),
  };
  ballArray.push(ball);
}