// Example 2: Given a sorted array of unique integers and a target integer,
//  return true if there exists a pair of numbers that sum to target,
//  false otherwise. This problem is similar to Two Sum.
// For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

// Two pointer approach
const twoSumTarget = (arr, target) => {
  // define left , define right
  let left = 0;
  let right = arr.length - 1;
  // if left[i] + right [str.length - 1] = target ? return true
  while (arr[left] + arr[right] !== target) {
    if (left >= right) {
      return false;
    } else if (arr[left] + arr[right] > target) {
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    }
  }
  return true;
};
// ifelse left[i] + right [str.lenght-1] != target
// => if sum > target ? right -- else left ++
console.log(twoSumTarget([1, 2, 4, 6, 8, 9, 14, 15], 13));
