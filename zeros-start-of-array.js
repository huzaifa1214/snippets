const arr = [0, 1, 3, 0, 0, 2, 0, 2, 3, 0];

function moveZerosToStart(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let j = i;
      while (j > 0) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[0] = 0;
    }
  }
}

console.log(arr);
moveZerosToStart(arr);
console.log(arr);
