export default class Player {
  constructor(canvas, velocity) {
    this.canvas = canvas;
    this.velocity = velocity;

    this.width = 53;
    this.height = 53;

    this.x = this.canvas.width / 2 - this.width / 2;
    this.y = this.canvas.height - this.height - 40;

    this.image = new Image();
    this.image.src = "/src/images/pixel_ship_4.png";
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
