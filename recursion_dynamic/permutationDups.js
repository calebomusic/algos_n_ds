// Write a method to compute all permutations of a string whose characters
// are not necessarily unique. The list of permutations should not have duplicates.

/*
  Build a frequency hash.
  Build permutations by adding remaining chars to prefix at each recursive call.
    Base case: 0 chars remaining.
*/

function frequencyHash(str) {
  let hash = {};

  for(let char of str) {
    if(hash[char] === undefined) {
      hash[char] = 1;
    } else {
      hash[char] ++;
    }
  }

  return hash;
}

function permuDups(str) {
  let freq = frequencyHash(str),
      results = [];

  permuDupsHelper(freq, '', str.length, results);

  console.log(results);
}

function permuDupsHelper(freq, prefix, remaining, results) {
  if (remaining === 0) {
    results.push(prefix)
  }

  chars = Object.keys(freq);

  for(let char of chars) {
    if (freq[char] > 0) {
      freq[char] --;
      permuDupsHelper(freq, prefix + char, remaining - 1, results);
      freq[char] ++;
    }
  }
}
