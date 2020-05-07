import Brick from "/src/brick.js";

export function buildLevel(game, level) {
  var bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if(brick === 1) {
        var position = {
          x: 80 * brickIndex, 
          y: 75 + 24 * rowIndex
        };
        bricks.push(new Brick(game, position));
      }
    });
  });
  return bricks;
}

export const level1 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];