// Example 4: 392. Is Subsequence.
// Given two strings s and t,
// return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some
// (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const arr1 = 'abcde';
const arr2 = 'abe';

// Twopointers method.

// i,j = 0 ;
const subsequenceFunc = (array1, array2) => {
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    array1[i] === array2[j] ? j++ : i++;
  }
  return j === array2.length ? true : false;
};
// while i < array.length && j < array2.lenght
// array1[i] === array2[j] ? j++
// if array1[i] !== array2[j] ? i++

// if i === array2.lengh return true else false

console.log(subsequenceFunc(arr1, arr2));
