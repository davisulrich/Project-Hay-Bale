import Enemy from "/src/enemy.js";

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
            new Enemy(5 + enemyIndex * 60, rowIndex * 45, enemyNumber)
          );
        }
      });
    });
  }

  draw(ctx) {
    this.drawEnemies(ctx);
  }

  drawEnemies(ctx) {
    this.enemyRows.flat().forEach((enemy) => {
      enemy.draw(ctx);
    });
  }
}
