import Game from "/src/game.js";

var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d"); // rendering context for drawing to canvas

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

// Instantiate Game object and start the game
var game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();


// initialize last time to 0
var lastTime = 0;

// gameloop runs every frame
function gameLoop(timestamp) {
  // calculate how much time has passed
  var deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  // clear screen
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  // call the game loop again with next frame's time stamp
  requestAnimationFrame(gameLoop);
}

// start game
requestAnimationFrame(gameLoop);