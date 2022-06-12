// https://www.youtube.com/watch?v=qCBiKJbLcFI 56:53

import EnemyController from "/src/enemyController.js";
import Player from "/src/player.js";
import BulletController from "/src/bulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 625;

const background = new Image();
background.src = "src/images/pixel_stars.jpg";

// bullet controllers
const playerBulletController = new BulletController(
  canvas,
  15,
  "limegreen",
  "player"
);
const enemyBulletController = new BulletController(canvas, 4, "red", "enemy");

const enemyController = new EnemyController(canvas, enemyBulletController);
const player = new Player(canvas, 18, playerBulletController);

// game loop
function game() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  enemyController.draw(ctx);
  player.draw(ctx);
  playerBulletController.draw(ctx);
  enemyBulletController.draw(ctx);
}

setInterval(game, 10000 / 20);
