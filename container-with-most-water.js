var maxArea = function (height) {
  // let maxArea = 0;
  // for (let i = 0; i < height.length; i++) {
  //   const mainVal = height[i];
  //   for (let j = i + 1; j < height.length; j++) {
  //     const secondaryVal = height[j];
  //     const diff = j - i;
  //     const newArea =
  //       mainVal < secondaryVal ? diff * mainVal : diff * secondaryVal;
  //     if (maxArea < newArea) maxArea = newArea;
  //   }
  // }
  // return maxArea;

  // for (const value of height) {
  //   const nr = value;

  //   if (nr >= max) {
  //     [result, max] = [max, nr];
  //   } else if (nr < max && nr > result) {
  //     result = nr;
  //   }
  // }
  let max = 0,
    result = 0,
    index1 = 0,
    index2 = 1;

  for (let i = 0; i < height.length; i++) {
    const nr = height[i];

    if (nr >= max) {
      [result, max] = [max, nr];
      index2 = index1;
      index1 = i;
    } else if (nr < max && (nr > result || result == max)) {
      result = nr;
      index2 = i;
    }
  }
  console.log(result, max, index1, index2);
  return result * (index2 - index1);
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
