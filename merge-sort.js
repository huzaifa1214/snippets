let mArray = [38, 27, 43, 3, 9, 82, 10];

function merge(arr, l, m, r) {
  let firstArr = [];
  let secondArr = [];
  let firstArrLength = m - l + 1;
  let secondArrLength = r - m;
  for (let i = 0; i < firstArrLength; i++) {
    firstArr[i] = arr[l + i];
  }
  for (let j = 0; j < secondArrLength; j++) {
    secondArr[j] = arr[m + 1 + j];
  }

  let k = l;
  let a = 0;
  let b = 0;
  while (a < firstArrLength && b < secondArrLength) {
    if (firstArr[a] <= secondArr[b]) {
      arr[k] = firstArr[a];
      a++;
    } else {
      arr[k] = secondArr[b];
      b++;
    }
    k++;
  }
  while (a < firstArrLength) {
    arr[k] = firstArr[a];
    k++;
    a++;
  }
  while (b < secondArrLength) {
    arr[k] = secondArr[b];
    k++;
    b++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) return;
  const m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

console.log(mArray);
mergeSort(mArray, 0, 6);
console.log(mArray);
