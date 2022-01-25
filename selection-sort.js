let array = [64, 25, 12, 22, 11];

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) minIndex = j;
    }
    swap(arr, minIndex, i);
  }
}
console.log(array);
selectionSort(array);
console.log(array);
