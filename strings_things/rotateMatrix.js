// rotate a matrix 90 degrees

const rotateMatrix = (matrix) => {
  const length = matrix.length;
  for (let level = 0; level < Math.floor(length/2); level++) {
    let end = length - level - 1;
    for (let i = level; i < end; i++) {
      let offset = end - i;
      let temp = matrix[level][i];

      matrix[level][i] = matrix[offset][level]
      matrix[offset][level] = matrix[end][offset];
      matrix[end][offset] = matrix[i][end];
      matrix[i][end] = temp;
    }
  }
  return matrix;
}

const grid1 = [[1,2,3],
[4,5,6],
[7,8,9]
]

const grid2 = [
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5]
]

const grid3 = [
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4]
]

const grid4 = [
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10]
]

console.log(rotateMatrix(grid4));
