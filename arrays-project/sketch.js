// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let questionMan;
let answerMan;
let court;
let suspenseMusic;
let gameStarted = false;

function preload() {
  court = loadImage("court-room.jpg");
  questionMan = loadImage("question-man.png");
  answerMan = loadImage("answer-man.png");
  suspenseMusic = loadSound("suspense-music.wav");

  suspenseMusic.setVolume(0.5);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  if (gameStarted) {
    // Start screen
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("THE COURT", width / 2, height / 2 - 30);
    textSize(18);
    text("Press MOUSE to enter THE COURT!", width / 2, height / 2 + 30);
  }
}

function screenPressed() {
  if (!suspenseMusic.isPlaying()) {
    suspenseMusic.loop();
  }
}




