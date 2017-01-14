// You are given an array-like data structure, Listy, which lacks a size method.
// It does however, have a method, elementAt, that returns an element at index i in O(1) time.
// If i is beyond the bounds of the data structure it returns -1.
// Given a Listy which contains sorted positive integers find the index at which an element x occurs.
// If x occurs multiple times you may return any index.

// Very naive. Iterate through Listy by starting at index 0 and incrementing elementAt.
// First strategy: set i to a very large number. Say 10000. Guess until you find an element in Listy.
// An element is found, utilize a modified binary search. If you don't know the end, increment the end to some arbitrary and increasing length.
// Two functions: one finds an element in Listy. The second is a modified binary search. In the modified binary search, list, beg, max, and target are passed in.
// If the element is found at index 10 and it is greater than the target, then 10 is set at the max and beg at 0 for the next recursive call.
// If an element is found at index 10 and it is less than the target, then beg is set to 10 and max is null. The next guess is 10 * 2. Hence if !max, the next guess is beg * 2.

// A better strategy utilizes an exponential runoff to find the length: 2, 8, 16, 32.

const findLength = (listy, target) => {
  let exp = 0;
  let bounds = false;

  while(!bounds) {
    exp ++;
    var end = Math.pow(2, exp);
    let el = listy.getElementAt(len);

    if(el === -1 || el > target) {
      bounds = true;
    }
  }

  return len;
}

const sortedSearchNoSize = (listy, target) => {
  end = findLength(listy, value);
  return search(listy, 0, end);
}

const search = (listy, beg, end) => {
  if(beg === 0 && end === 0) {
    return null;
  }

  mid = Math.floor((end + beg)/2);
  if(listy.elementAt(mid) === target) {
    return mid;
  } else if(listy.elementAt(mid) === -1 || listy.elementAt(mid) > target) {
    return search(listy, beg, mid);
  } else {
    let nextSearch = search(listy, mid + 1, end);

    if(nextSearch === null) {
      return null;
    }

    return mid + nextSearch + 1;
  }
}
