// Example 1: Return true if a given string is a palindrome, false otherwise.
// A string is a palindrome if it reads the same forwards as backwards.
//  That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

const palindrome = (str) => {
  let right = str.length - 1;
  for (let left = 0; left < right; left++, right--) {
    if (str[left] != str[right]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome('sos'));
