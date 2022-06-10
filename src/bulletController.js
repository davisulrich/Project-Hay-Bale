import Bullet from "/src/bullet.js";

export default class BulletController {
  bullets = [];
  timeTillNextBullet = 0;

  constructor(canvas, maxBulletsAtATime, bulletColor, bulletType) {
    this.canvas = canvas;
    this.maxBulletsAtATime = maxBulletsAtATime;
    this.bulletColor = bulletColor;
    this.bulletType = bulletType;

    this.shootSound = new Audio("/src/audio/" + bulletType + "_laser.ogg");
    this.shootSound.volume = 0.1;
  }

  shoot(x, y, velocity, timeTillNextBullet = 3) {
    if (
      this.timeTillNextBullet <= 0
      // && this.bullets.length < this.maxBulletsAtATime
    ) {
      const bullet = new Bullet(this.canvas, x, y, velocity, this.bulletColor);
      this.bullets.push(bullet);
      this.shootSound.currentTime = 0;
      this.shootSound.play();

      this.timeTillNextBullet = timeTillNextBullet;
    }
  }

  draw(ctx) {
    this.bullets = this.bullets.filter(
      (bullet) => bullet.y + bullet.height > 0 && bullet.y <= this.canvas.width
    );
    this.bullets.forEach((bullet) => bullet.draw(ctx));
    if (this.timeTillNextBullet > 0) {
      this.timeTillNextBullet--;
    }
  }
}
