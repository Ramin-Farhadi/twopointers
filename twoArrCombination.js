// Example 3: Given two sorted integer arrays,
//  return an array that combines both of them and is also sorted.

// Take two pointer
// finalArr = []
// i = 0 firstarrayelement
// j = 0 firstarrayelement

// if
// arr1[i] > arr2[j] && arr[i] <= arr1.length - 1 then finalArr.push(arr[i]) ; i++
// elseif
// arr[i] < arr[j] && arr[j] <= arr2.lenght - 1 then finalArr.push(arr[j]) ; j++

const arrCombination = (arr1, arr2) => {
  const finalArr = [];
  let i = (j = 0);

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      finalArr.push(arr1[i]);
      i++;
    } else {
      finalArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    finalArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    finalArr.push(arr2[j]);
    j++;
  }
  return finalArr;
};

array1 = [1, 5, 6, 7, 0];
array2 = [3, 4, 9, 10, 12];

console.log(arrCombination(array1, array2));
