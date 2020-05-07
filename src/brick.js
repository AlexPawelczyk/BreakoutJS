export default class Brick {
  constructor(game, position) {
    this.game = game;
    this.height = 24;
    this.image = document.getElementById("img_brick");
    this.position = position;
    this.width = 80; 
  }

  draw(ctx) {
    ctx.drawImage(
      this.image, 
      this.position.x, 
      this.position.y, 
      this.width, 
      this.height
    );
  }

  update(){

  }
}