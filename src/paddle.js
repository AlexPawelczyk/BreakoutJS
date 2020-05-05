export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddleWidth = 150;
    this.paddleHeight = 20;
    this.maxSpeed = 7;
    this.currSpeed = 0;

    this.position = {
      x: gameWidth / 2 - this.paddleWidth / 2,
      y: gameHeight - this.paddleHeight - 10,
    }
  }

  draw(ctx) {
    ctx.fillStyle = "#0ff"
    ctx.fillRect(this.position.x, this.position.y, this.paddleWidth, this.paddleHeight);
  }

  moveLeft() {
    this.currSpeed = -this.maxSpeed;
  }

  moveRight() {
    this.currSpeed = this.maxSpeed;
  }

  stop() {
    this.currSpeed = 0;
  }

  update(deltaTime) {
    if(!deltaTime) return;
    this.position.x += this.currSpeed;
    if(this.position.x < 0) {
      this.position.x = 0;
    }
    if(this.position.x + this.paddleWidth > this.gameWidth) {
      this.position.x = this.gameWidth - this.paddleWidth;
    }
  }
}