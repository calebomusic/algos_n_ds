// You are given two strings, pattern and value. The pattern string consists of
// just the letters a and b, describing a pattern within a string.
// For example, the string 'catcatgocatgo', matches the pattern 'aabab'.
// It also matches patterns like a, ab, b.

function patternMatching(str, pattern) {
  if (pattern.length === 0) {
    return str.length === 0;
  }

  let mainChar = pattern[0],
      altChar = mainChar === 'a' ? 'b' : 'a',
      [ mainCount, altCount ] = getCount(pattern, mainChar),
      firstAlt = pattern.indexOf(altChar),
      maxMainSize = Math.floor(str.length / mainCount);

  for (var mainSize = 0; mainSize <= maxMainSize; mainSize++) {
    let remLength = str.length - (mainSize * mainCount),
        first = str.slice(0, mainSize);
    if (altCount === 0 || remLength % altCount === 0) {
      let altIndex = firstAlt * mainSize,
          altSize = altCount == 0 ? 0 : Math.floor(remLength / altCount),
          second = altCount === 0 ? '' : str.slice(altIndex, altIndex + altSize);

      let candidate = buildFrom(pattern, first, second);

      if (candidate === str) {
        return true;
      }
    }
  }

  return false;
}

function getCount(pattern, mainChar) {
  let mainCount = 0,
      altCount = 0;

  for(let char of pattern) {
    if (char === mainChar) {
      mainCount += 1;
    } else {
      altCount += 1;
    }
  }

  return [mainCount, altCount];
}

function buildFrom(pattern, first, second) {
  let str = '',
      main = pattern[0];

  for(let char of pattern) {
    if (main === char) {
      str += first;
    } else {
      str += second;
    }
  }

  return str;
}

console.log(patternMatching('catcatgocatgo', 'aabab'));
