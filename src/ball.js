import { detectCollision } from "/src/collisionDetection.js";
export default class Ball {
  constructor(game){
    this.game = game;
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.image = document.getElementById("img_ball");
    this.position = {
      x: 10,
      y: 10
    }
    this.size = 16;
    this.speed = {
      x: 4,
      y: 4
    }
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // collision with left or right walls
    if(this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    // collision with top or bottom walls
    if(this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // collision with paddle
    if(detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}