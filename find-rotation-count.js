/**
 * Returns the number of rotations in a rotated sorted array.
 * Time Complexity: O(log n)
 */

const findRotationCount = (rotatedArr) => {
  let pivotIdx = findPivot(rotatedArr);
  return pivotIdx;
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

module.exports = findRotationCount;
