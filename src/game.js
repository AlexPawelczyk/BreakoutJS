import Paddle from "/src/paddle.js"
import InputHandler from "/src/InputHandler.js";
import Ball from "/src/ball.js";
import Brick from "/src/brick.js";
import { buildLevel, level1 } from "/src/levels.js";

export default class Game {

  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth; 
  }

  /* Function for drawing all game objects */
  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));
  }

  start() {
    // instantiate Paddle object
    this.paddle = new Paddle(this);

    // instantiate Ball object
    this.ball = new Ball(this);

    //var brick = new Brick(this, {x: 20, y: 20});
    var bricks = buildLevel(this, level1);
    
    this.gameObjects = [
      this.ball,
      this.paddle,
      ...bricks
    ];

    // instantiate InputHandler object for moving the paddle
    new InputHandler(this.paddle);
  }

  /* Function for updating all game objects */
  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));
    this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
  }

}

