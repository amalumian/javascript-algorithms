const rotateLeft = (matrix) => {
  return matrix[0].map((value, index) =>
    matrix.map((row) => row[row.length - 1 - index])
  );
};

const rotateRight = (matrix) => {
  return matrix[0].map((value, index) =>
    matrix.map((row) => row[index]).reverse()
  );
};

const matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 0, 1, 2],
  [3, 4, 5, 6, 7, 8],
  [9, 0, 1, 2, 3, 4],
];

console.log(rotateLeft(matrix));
console.log(rotateRight(matrix));

// Teacher's solution
const rotate = (matrix, direction) => {
  const rowsCount = matrix.length;
  const [firstRow] = matrix;
  const columnsCount = firstRow.length;
  const rotated = [];

  for (let row = 0; row < columnsCount; row += 1) {
    rotated[row] = [];
    for (let column = 0; column < rowsCount; column += 1) {
      rotated[row][column] = direction === 'left'
        ? matrix[column][columnsCount - row - 1]
        : matrix[rowsCount - column - 1][row];
    }
  }

  return rotated;
};

