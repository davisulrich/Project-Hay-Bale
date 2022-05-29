export default class Enemy {
  constructor(x, y, imageNumber) {
    this.x = x;
    this.y = y;
    this.width = 64;
    this.height = 64;

    this.image = new Image();
    this.image.src = `/src/images/enemy_${imageNumber}.png`;
  }
}
