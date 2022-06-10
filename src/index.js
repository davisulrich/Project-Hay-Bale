// https://www.youtube.com/watch?v=qCBiKJbLcFI 28.05

import EnemyController from "/src/enemyController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 500;

const background = new Image();
background.src = "src/images/pixel_stars.jpg";

const enemyController = new EnemyController(canvas);

// game loop
function game() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  enemyController.draw(ctx);
}

setInterval(game, 10000 / 30);
