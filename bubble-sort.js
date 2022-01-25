let bArray = [1, 5, 4, 2, 8];

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
}

console.log(bArray);
bubbleSort(bArray);
console.log(bArray);
