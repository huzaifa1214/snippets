let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function printSpiralMatrix(arr, rows, cols) {
  let mainLoopLen = cols - 2;
  let currentRow = 0;
  let totalColumns = cols - 1;
  let totalRows = rows - 1;
  for (let i = 0; i < mainLoopLen; i++) {
    let j = currentRow;
    while (j <= totalColumns) {
      console.log(arr[currentRow][j]);
      j++;
    }
    let k = currentRow + 1;
    while (k <= totalRows) {
      console.log(arr[k][totalColumns]);
      k++;
    }
    let l = totalColumns - 1;
    while (l >= currentRow) {
      console.log(arr[totalRows][l]);
      l--;
    }
    let m = totalRows - 1;
    while (m > currentRow) {
      console.log(arr[m][i]);
      m--;
    }
    currentRow++;
    totalColumns--;
    totalRows--;
  }
}

printSpiralMatrix(arr, 4, 4);
