/**
 * Given an array of 1s and 0s which has all 1s first followed by all 0s
 * returns the number of zeroes in the array
 * Time Complexity: O(log n)
 */
const countZeroes = (numArr) => {
  let count = 0;
  let leftIdx = 0;
  let rightIdx = numArr.length - 1;
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  while (leftIdx <= rightIdx) {
    if (numArr[middleIdx] === 0) {
      count += rightIdx - middleIdx + 1;
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  }
  return count;
};

module.exports = countZeroes;
