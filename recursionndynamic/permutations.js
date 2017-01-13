const permutations = (str) => {
  freqHash = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freqHash[char]) {
      freqHash[char] ++;
    } else {
      freqHash[char] = 1;
    }
  }

  return permutationsHelper(freqHash, '', str.length, []);
}

const permutationsHelper = (freqHash, prefix, remaining, result) => {
  if (remaining === 0) {
    result.push(prefix);
  }

  chars = Object.keys(freqHash);

  for (var i = 0; i < chars.length; i++) {
    let char = chars[i];

    if (freqHash[char] > 0) {
      count = freqHash[char];

      freqHash[char] --;
      permutationsHelper(freqHash, char + prefix, remaining - 1, result);
      freqHash[char] = count;
    }
  }

  return result
}
