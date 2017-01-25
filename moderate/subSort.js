// Given an array of integers, write a method to find indicies m and n such
// that if you sorted elements m through n, the entire array would be sorted.
// Minimize n - m (that is, find the smallest such sequence)

// 1 2 4 7 10 11 7 12 6 7 16 18 19 => 3, 9
//

// Find where unsorted beg and end
// uMax = arr[uBeg - 1], uMin = arr[uMin + 1]
// Find where uMax is no longer larger than elements to the right of unsorted arr
// Find where uMin is no longer smaller than elements to the left of unsorted arr

const subSort = (arr) => {
  let uBeg = 0,
      uEnd = arr.length - 1
      uMax = Number.MIN_VALUE,
      uMin = Number.MAX_VALUE;

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] < arr[i]) {
      uBeg = i + 1;
      break
    }
  }

  for (var i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i-1]) {
      uEnd = i - 1;
      break
    }
  }

  uMax = arr[uBeg + 1];
  uMin = arr[uEnd + 1];

  for(var i = uBeg - 1; i => 0; i --) {
    if (arr[i] > uMin) {
      uBeg = i
    } else {
      break;
    }
  }

  for(var i = uEnd + 1; i <= arr.length - 1; i ++) {
    if (arr[i] < uMax) {
      uEnd = i
    } else {
      break;
    }
  }

  return [uBeg, uEnd];
}
