/**
 * Finds the floor of a value in a sorted array.
 * returns -1 if the floor does not exist.
 * Time Complexity: O(log n)
 *
 * @example
 * findFloor([1, 2, 8, 10, 10, 12, 19], 20); // 19
 */
const findFloor = (
  sortedArr,
  val,
  leftIdx = 0,
  rightIdx = sortedArr.length - 1
) => {
  if (leftIdx > rightIdx) return -1;
  if (val >= sortedArr[rightIdx]) return sortedArr[rightIdx];
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  if (sortedArr[middleIdx] === val) return sortedArr[middleIdx];
  if (
    middleIdx > 0 &&
    sortedArr[middleIdx - 1] <= val &&
    val < sortedArr[middleIdx]
  ) {
    return sortedArr[middleIdx - 1];
  }
  if (val < sortedArr[middleIdx]) {
    return findFloor(sortedArr, val, leftIdx, middleIdx - 1);
  }
  return findFloor(sortedArr, val, middleIdx + 1, rightIdx);
};

module.exports = findFloor;
