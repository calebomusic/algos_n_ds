// Write a method to sort an array of strings so that all the anagrams are next to each other

const groupAnagrams = (arr) => {
  let anagrams = {}

  for (var i = 0; i < arr.length; i++) {
    let sorted = arr[i].split('').sort().join('');

    if (anagrams[sorted]) {
      anagrams[sorted].push(arr[i]);
    } else {
      anagrams[sorted] = [arr[i]];
    }
  }

  let keys = Object.keys(anagrams);
  let m = 0
  arr = [];

  for (var j = 0; j < keys.length; j++) {
    let subarr = anagrams[keys[j]];
    for (var k = 0; k < subarr.length; k++) {
      arr.push(subarr[k]);
    }
  }

  return arr;
}

// A variant of bucket sort.
