//Array and Object Notation Assignment
// 10/19/2023
// Anamol Dhakal
// Period 3
// Creates random shapes from circles to squares, assigns random values to it within a max and min so that the screen doesn't 
// randomly get filled with one big shape the size of the window. A simple project that makes use of both arrays and object notation.
// Extra for experts: I do not think there is anything new that I have included in here, the only one that I don't recall learning in class 
// would be the "forEach" in line 13. Everything else was taught in class, or are from previous days in class.

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  textSize(40);
  console.log(keyCode);
  shapes.forEach(displayShape);
}

// Calls to this every time the mouse is pressed, adding shapes
function mousePressed() {
  addRandomShapes(5);

}

// Displays the shapes that were made
function displayShape(shape) {
  fill(shape.color);
  noStroke();
  if (shape.shapeType === "ellipse") {
    ellipse(shape.x, shape.y, shape.size, shape.size);
  } 
  else {
    rect(shape.x, shape.y, shape.size, shape.size);
  }
}

function screenClicked() {
  shapes = [];
}

// This pushes random shapes that were made
function addRandomShapes(count) {
  for (let i = 0; i < count; i++) {
    shapes.push(createRandomShape());
  }
}

// Creates random values for the shapes
function createRandomShape() {
  let shape = {
    x: random(width),
    y: random(height),
    size: random(20, 50),
    color: color(random(255), random(255), random(255)),
  };

  // Checks if the shape should be an ellipse or a rectangle
  if (random(1) < 0.5) {
    shape.shapeType = "ellipse";
  } 
  else {
    shape.shapeType = "rect";
  }
  return shape;
}

