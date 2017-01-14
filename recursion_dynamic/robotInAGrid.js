// Imagine a robot sitting on the upper left corner of a grid with r rows and c columns.
// The robot can only move in two directions, right and down, but certain cells are "off-limits",
// such that the robot cannot step on them. Design an algorithm to find a path.

const robotInAGrid = (grid) => {
  let start = [ 0, 0 ];
  let end = [ grid.length - 1, grid[0].length - 1 ];
  let path = [end]
  return findPath(grid, end, start, path);
}

const findPath = (grid, start, target, path = []) => {
  let up = [start[0] - 1, start[1]];
  let left = [start[0], start[1] - 1];

  for (let coord of [up, left]) {
    if(inBounds(grid, coord) && grid[coord[0]][coord[1]] !== null) {
      path.unshift(coord);

      if(coord[0] === target[0] && coord[1] === target[1]) {
        return path;
      }

      let search = findPath(grid, coord, target, path);

      if(search) {
        return search
      } else {
        path.shift();
      }
    }
  }

  return false;
}

var inBounds = (grid, coord) => {
  return grid.length > coord[0] && coord[0] >= 0 && coord[1] < grid[0].length && coord[0] >= 0;
}
