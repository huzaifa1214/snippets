let nums1 = [1, 3, 5, 7];
let nums2 = [2, 4, 10];
// < ---- helper functions ---- >
const findIndex = (arr, x, start, end) => {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] <= x && (mid + 1 == arr.length || arr[mid + 1] > x))
    return mid + 1;
  else if (arr[mid] >= x && (arr[mid - 1] < x || mid - 1 < 0)) return mid;
  if (arr[mid] > x) return findIndex(arr, x, start, mid - 1);
  else return findIndex(arr, x, mid + 1, end);
};

const calcMedian = (arr) => {
  let mid = Math.floor(arr.length / 2);
  return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};

// < ---- Main function ---- >

const findMedianSortedArrays = (nums1, nums2) => {
  let median = -1;
  if (!nums1.length) {
    median = calcMedian(nums2);
  } else {
    nums2.forEach((element, index) => {
      const indexToInsert = findIndex(nums1, nums2[index], 0, nums1.length - 1);
      nums1.splice(indexToInsert, 0, element);
    });
    median = calcMedian(nums1);
  }
  return median;
};

console.log(findMedianSortedArrays(nums1, nums2));
