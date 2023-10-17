// Images and Sounds Demo
// Anamol Dhakal
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let wario;
let explosionSound;
let backgroundMusic;

function preload() {
  wario = loadImage("wario running.png");
  explosionSound = loadSound("explosion.wav");
  backgroundMusic = loadSound("game-music.wav");

  backgroundMusic.setVolume(0.5);
  explosionSound.setVolume(1.0);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);

  image(wario, mouseX, mouseY, wario.width, wario.height);
  // circle(mouseX, mouseY, 50);

}
function mousePressed() {
  explosionSound.play();

  if (!backgroundMusic.isPlaying()) {
    backgroundMusic.loop();
  }
}