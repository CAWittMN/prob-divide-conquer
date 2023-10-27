/**
 * Returns the index of a value in a rotated sorted array.
 * Returns -1 if the value is not found.
 * Time Complexity: O(log n)
 */
const findRotatedIndex = (rotatedArr, val) => {
  let pivotIdx = findPivot(rotatedArr);
  if (pivotIdx > 0 && val >= rotatedArr[0] && val <= rotatedArr[pivotIdx - 1]) {
    return binarySearch(rotatedArr, val, 0, pivotIdx - 1);
  } else {
    return binarySearch(rotatedArr, val, pivotIdx, rotatedArr.length - 1);
  }
};

const findPivot = (arr) => {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[middleIdx] > arr[middleIdx + 1]) return middleIdx + 1;
    else if (arr[leftIdx] <= arr[middleIdx]) leftIdx = middleIdx + 1;
    else rightIdx = middleIdx - 1;
  }
};

const binarySearch = (arr, val, leftIdx, rightIdx) => {
  if (arr.length === 0) return -1;
  if (val < arr[leftIdx] || val > arr[rightIdx]) return -1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[middleIdx] === val) return middleIdx;
    else if (val < arr[middleIdx]) rightIdx = middleIdx - 1;
    else leftIdx = middleIdx + 1;
  }
  return -1;
};

module.exports = findRotatedIndex;
