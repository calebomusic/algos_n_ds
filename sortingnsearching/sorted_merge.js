// You are given two sorted arrays, a and b, where a has a large enough buffer at the end to hold b.
// Write a method to merg b into a in sorted order.

const sortedMerge = (a, b) => {
  let i = 0;
  let j = 0;
  let m = a.length + b.length - 1;

  while(i >= 0 || j >= 0) {
    if (j < 0 || a[i] > b[j]) {
      a[m] = a[i];
      i --;
    } else {
      a[m] = b[j];
      j --;
    }

    b --;
  }

  return a;
}
