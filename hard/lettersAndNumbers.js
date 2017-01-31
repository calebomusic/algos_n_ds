// Given an array filled with letters and numbers find the longest subarray
// with an equal number of letters and numbers.

/*
  Generate character counts and diff of character counts.
*/

//    a 1 a a a 1 a a 1 a 1
// a: 1 1 2 3 4 4 5 6 6 7 7
// 1: 0 1 1 1 1 2 2 2 3 3 4
// d: 1 0 1 2 3 2 3 4 3 4 3


function lettersAndNumbers(arr) {
  let numCount = [],
      letterCount = [],
      diff = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (typeof el === 'string' && el.match(/\d/) === null) {
      incCount(letterCount, numCount, i);
    } else {
      incCount(numCount, letterCount, i);
    }

    diff[i] = numCount[i] - letterCount[i];
  }

  let seen = { 0: -1 },
      max = 0,
      maxIdx = [];

  if (diff[diff.length - 1] === 0) {
    return arr;
  }

  for (let j = 0; j < arr.length; j++) {
    let currDiff = diff[j];
    if (seen[currDiff]) {
      if (max < (j - seen[currDiff])) {
        max = j - seen[currDiff];
        maxIdx = [seen[currDiff] + 1, j]
      }
    }

    if (!seen[currDiff]) {
      seen[currDiff] = j;
    }
  }

  let [ start, end ] = maxIdx;

  return arr.slice(start, end + 1);
}

function incCount(increment, constant, i) {
  if (i !== 0) {
    increment[i] = increment[i - 1] + 1;
    constant[i] = constant[i -1];
  } else {
    increment[i] = 1;
    constant[i] = 0;
  }
}

console.log(lettersAndNumbers(['a', 1, 'a', 1,'a',1]));
console.log(lettersAndNumbers(['a', 1, 1,1]));
console.log(lettersAndNumbers(['a', 1, 'a', 'a', 'a', 1, 'a', 1, 1, 'a', 1, 'a']));
