// Given a sorted array of n integers that has been rotated an unknown number of times,
// write code to find a given element

// Does not work for duplicates
const rotatedBinarySearch = (arr, target) => {
  if (arr.length === 0) {
    return null;
  }

  let mid = Math.floor(arr.length / 2);
  let end = arr.length - 1;

  if (arr[mid] === target) {
    return mid;
  } else if (arr[0] < arr[mid]) {
    if (arr[0] <= target && target < arr[mid] ) {
      return rotatedBinarySearch(arr.slice(0, mid), target);
    } else {
      let nextSearch = rotatedBinarySearch(arr.slice(mid + 1), target);

      if (nextSearch === null) {
        return null;
      }

      return mid + nextSearch + 1;
    }
  } else {
    if (arr[mid] < target && target <= arr[end]) {
      let nextSearch = rotatedBinarySearch(arr.slice(mid + 1), target);

      if (nextSearch === null) {
        return null;
      }

      return mid + nextSearch + 1;
    } else {
      return rotatedBinarySearch(arr.slice(0, mid), target);
    }
  }
}
