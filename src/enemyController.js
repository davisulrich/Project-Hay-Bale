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
  defaultXVelocity = 1;
  defaultYVelocity = 1;

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
      if (enemyRow.movingDirection === movingDirection.right) {
        enemyRow.xVelocity = enemyRow.defaultXVelocity;
        enemyRow.yVelocity = 0;
      }
    }
  }

  drawEnemies(ctx) {
    this.enemyRows.flat().forEach((enemy) => {
      enemy.move(this.xVelocity, this.yVelocity);
      enemy.draw(ctx);
    });
  }
}
