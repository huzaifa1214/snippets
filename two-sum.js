const num = [3, 2, 3];
const target = 6;
//my solution
var myTwoSum = function (nums, target) {
  let firstIndex;
  let secondIndex;
  outer_loop: for (let i = 0; i < nums.length; i++) {
    firstIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      secondIndex = j;
      if (nums[firstIndex] + nums[secondIndex] == target) break outer_loop;
    }
  }
  return [firstIndex, secondIndex];
};

//optimal solution
var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};

console.log(twoSum(num, target));
