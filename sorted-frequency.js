/**
 * Counts the occurrences of a value in a sorted array
 * Time Complexity: O(log n)
 */
const sortedFrequency = (sortedArr, val) => {
  let firstIdx = findFirst(sortedArr, val);
  if (firstIdx === -1) return firstIdx;
  let lastIdx = findLast(sortedArr, val);
  return lastIdx - firstIdx + 1;
};

const findFirst = (
  sortedArr,
  val,
  leftIdx = 0,
  rightIdx = sortedArr.length - 1
) => {
  if (rightIdx >= leftIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (
      (middleIdx === 0 || val > sortedArr[middleIdx - 1]) &&
      sortedArr[middleIdx] === val
    ) {
      return middleIdx;
    } else if (val > sortedArr[middleIdx]) {
      return findFirst(sortedArr, val, middleIdx + 1, rightIdx);
    } else {
      return findFirst(sortedArr, val, leftIdx, middleIdx - 1);
    }
  }
  return -1;
};

const findLast = (
  sortedArr,
  val,
  leftIdx = 0,
  rightIdx = sortedArr.length - 1
) => {
  if (rightIdx >= leftIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (
      (middleIdx === sortedArr.length - 1 || val < sortedArr[middleIdx + 1]) &&
      sortedArr[middleIdx] === val
    ) {
      return middleIdx;
    } else if (val < sortedArr[middleIdx]) {
      return findLast(sortedArr, val, leftIdx, middleIdx - 1);
    } else {
      return findLast(sortedArr, val, middleIdx + 1, rightIdx);
    }
  }
  return -1;
};

module.exports = sortedFrequency;
