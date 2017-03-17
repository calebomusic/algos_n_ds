// Given four digits, find the maximum possible time in 24 hour form

function maxTime(arr) {
  if(arr.length > 4) {
    return null;
  }

  let result = [],
      counts = genCounts(arr);

  if(counts[0] == 2) {
    var onesHourMax = 4;
  } else {
    var onesHourMax = 3;
  }

  placeLimitedMax(result, counts, 2);
  placeLimitedMax(result, counts, onesHourMax);
  placeLimitedMax(result, counts, 5);
  placeLimitedMax(result, counts, 9);

  if(parseInt(result.join('')) > 2400 || result.length < 4) {
    return null;
  }

  return result.slice(0, 2).join('') + ':' + result.slice(2).join('');
}

function genCounts(arr) {
  let counts = {};

  for(let num of arr) {
    counts[num] = counts[num] === undefined ? 1 : counts[num] + 1;
  }

  return counts;
}

function placeLimitedMax(result, counts, limit) {
  let max = undefined;

  for(let key in counts) {
    let num = parseInt(key);
    if(num <= limit && (max < num || max === undefined )) {
      max = num;
    }
  }

  if(!(max === undefined)) {
    counts[max] --;
    console.log(counts);

    if(counts[max] === 0) {
      delete counts[max];
    }

    result.push(max);
    return counts;
  }
}

console.log(maxTime([1,2,3,4]));
console.log(maxTime([5,4,3,0]));
console.log(maxTime([0,1,0,0]));
console.log(maxTime([2,0,0, 4]));
console.log(maxTime([2,0,4, 4]));
console.log(maxTime([2,4,4, 4]));
