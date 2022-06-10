// https://www.youtube.com/watch?v=qCBiKJbLcFI 35.05

import EnemyController from "/src/enemyController.js";
import Player from "/src/player.js";
import BulletController from "/src/bulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 625;

const background = new Image();
background.src = "src/images/pixel_stars.jpg";

const playerBulletController = new BulletController(
  canvas,
  15,
  "limegreen",
  "player"
);
const enemyController = new EnemyController(canvas);
const player = new Player(canvas, 18, playerBulletController);

// game loop
function game() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  enemyController.draw(ctx);
  player.draw(ctx);
  playerBulletController.draw(ctx);
}

setInterval(game, 1000 / 20);
