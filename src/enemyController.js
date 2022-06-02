import Enemy from "/src/enemy.js";
import movingDirection from "/src/movingDirection.js";

export default class EnemyController {
  enemyMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  ];
  enemyRows = [];

  currentDirection = movingDirection.right;

  xVelocity = 0;
  yVelocity = 0;
  defaultXVelocity = 20;
  defaultYVelocity = 20;

  // for counting how long the enemies move down then change directions
  moveDownTimerDefault = 30;
  moveDownTimer = this.moveDownTimer;

  constructor(canvas) {
    this.canvas = canvas;
    this.createEnemies();
  }

  createEnemies() {
    this.enemyMap.forEach((row, rowIndex) => {
      this.enemyRows[rowIndex] = [];
      row.forEach((enemyNumber, enemyIndex) => {
        if (enemyNumber > 0) {
          this.enemyRows[rowIndex].push(
            new Enemy(5 + enemyIndex * 55, rowIndex * 45, enemyNumber)
          );
        }
      });
    });
  }

  draw(ctx) {
    this.updateVelocityAndDirection();
    this.drawEnemies(ctx);
  }

  updateVelocityAndDirection() {
    for (const enemyRow of this.enemyRows) {
      if (this.currentDirection === movingDirection.right) {
        this.xVelocity = this.defaultXVelocity;
        this.yVelocity = 0;

        const rightMostEnemy = enemyRow[enemyRow.length - 1];
        if (rightMostEnemy.x + rightMostEnemy.width + 5 >= this.canvas.width) {
          this.currentDirection = movingDirection.downLeft;

          break;
        }
      } else if (this.currentDirection === movingDirection.downLeft) {
        this.moveDown(movingDirection.left);
      }
    }
  }

  moveDown(newDirection) {
    this.xVelocity = 0;
    this.yVelocity = this.defaultYVelocity;
  }

  drawEnemies(ctx) {
    this.enemyRows.flat().forEach((enemy) => {
      enemy.move(this.xVelocity, this.yVelocity);
      enemy.draw(ctx);
    });
  }
}
