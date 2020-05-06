import Paddle from "/src/paddle.js"
import InputHandler from "/src/InputHandler.js";
import Ball from "/src/ball.js";

var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d"); // rendering context for drawing to canvas

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;


// instantiate Paddle object
var paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

// instantiate Ball object
var ball = new Ball();

// instantiate InputHandler object for moving the paddle
new InputHandler(paddle);

// initialize last time to 0
var lastTime = 0;

// gameloop runs every frame
function gameLoop(timestamp) {
  // calculate how much time has passed
  var deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  // clear screen
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // updates paddle
  paddle.update(deltaTime);

  // redraws paddle
  paddle.draw(ctx);

  // redraw ball
  ball.draw(ctx);

  // calls the game loop again with next frames time stamp
  requestAnimationFrame(gameLoop);
}

gameLoop();