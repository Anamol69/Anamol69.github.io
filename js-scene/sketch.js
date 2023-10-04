// Anamol Dhakal
// CS30 Period 3
// extra for experts: I pretty much only used functions and logic explained in claass so I don't have anything for it.

let leftPaddleY;
let rightPaddleY;
let paddleWidth = 10;
let paddleHeight = 80;
let ball;
let ballSpeedX;
let ballSpeedY;
let gameStarted = false;
let playerScore = 0;
let aiScore = 0;

function setup() {
  createCanvas(800, 400);
  noStroke();
  leftPaddleY = height / 2 - paddleHeight / 2;
  rightPaddleY = height / 2 - paddleHeight / 2;
  ball = createBall();
  ballSpeedX = 5;
  ballSpeedY = 5;
}

function draw() {
  background(0);
  
  if (!gameStarted){
      screenPressed();
    }
    
    console.log(keyCode);

  if (gameStarted) {
    // Draw paddles and ball
    fill(255);
    rect(10, leftPaddleY, paddleWidth, paddleHeight);
    rect(width - 20, rightPaddleY, paddleWidth, paddleHeight);
    drawBall(ball);

    // Move paddles with keyboard
    if (keyIsDown(87) && leftPaddleY > 0) {
      leftPaddleY -= 5; // "W" key moves up (left player)
    }
    if (keyIsDown(83) && leftPaddleY < height - paddleHeight) {
      leftPaddleY += 5; // "S" key moves down (left player)
    }

    // AI for the right paddle
    let rightPaddleCenter = rightPaddleY + paddleHeight / 2;
    if (rightPaddleCenter < ball.y - 15) {
      rightPaddleY += 5;
    } else if (rightPaddleCenter > ball.y + 15) {
      rightPaddleY -= 5;
    }
    
    

    // Update ball position
    ball.x += ballSpeedX;
    ball.y += ballSpeedY;

    // Ball-wall collisions
    if (ball.y < 0 || ball.y > height) {
      ballSpeedY *= -1;
    }

    // Ball-paddle collisions
    if (
      (ball.x < 20 + paddleWidth &&
        ball.x > 20 &&
        ball.y > leftPaddleY &&
        ball.y < leftPaddleY + paddleHeight) ||
      (ball.x > width - 30 - paddleWidth &&
        ball.x < width - 30 &&
        ball.y > rightPaddleY &&
        ball.y < rightPaddleY + paddleHeight)
    ) {
      ballSpeedX *= -1;
    }

    // Ball out of bounds (score)
    if (ball.x < 0) {
      aiScore++;
      resetGame();
    } else if (ball.x > width) {
      playerScore++;
      resetGame();
    }

    // Display scores
    textSize(32);
    fill(255);
    text(playerScore + " - " + aiScore, width / 2, 30);
  } else {
    // Start screen
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Pong Game", width / 2, height / 2 - 30);
    textSize(18);
    text("Press SCREEN to Start", width / 2, height / 2 + 30);
  }
}

function createBall() {
  return {
    x: width / 2,
    y: height / 2,
    diameter: 20,
  };
}

function drawBall(ball) {
  fill(255);
  ellipse(ball.x, ball.y, ball.diameter);
}

function resetGame() {
  gameStarted = false;
  ball = createBall();
  ballSpeedX = random() > 0.5 ? 5 : -5; // Randomize ball direction
  ballSpeedY = random() > 0.5 ? 5 : -5;
  leftPaddleY = height / 2 - paddleHeight / 2;
  rightPaddleY = height / 2 - paddleHeight / 2;
}

function screenPressed() {
  if (mouseIsPressed){
    // Start the game when MOUSE key is pressed
    if (!gameStarted) {
      gameStarted = true;
    } else {
      // Reset scores and ball position
      playerScore = 0;
      aiScore = 0;
      resetGame();
    }
  }
}
