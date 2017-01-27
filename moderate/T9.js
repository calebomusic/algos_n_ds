// On ancient cell phones, users 'typed' on a numeric keypad and the phone would
// provide a list of words that matched these numbers. Each digit mapped to a set of 0-4 letters.
// Implement an algorithm to return a list of matching words, given a sequence of digits.
// You are provided a list of valid words.

// Mapping: 1. 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno',
// 7: 'pqrs', 8: 'tuv', 9: 'wxyz'

// 8733 (tree, used)

// Make prefix tree from dictionary.
// Use constant which includes letter, using each letters to move through
// the prefix tree.

function makePrefix(dict) {
  let tree = {};
  for (let word of dict) {
    let curr = tree;
    for (var i = 0; i < word.length; i++) {
      let char = word[i];
      if (i === word.length - 1) {
        curr[char] = {'$': true};
      } else {
        if (!curr[char]) {
          curr[char] = {};
        }

        curr = curr[char]
      }
    }
  }

  return tree;
}
const mapping = {
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

function t9(nums, dict) {
  dict = makePrefix(dict);
  nums = nums.toString().split('');
  words = [];

  return searchDict(nums, dict, '', words);
}

function searchDict(nums, dict, str = '', words) {
  if (nums.length === 0) {
    return [];
  }

  let num = nums[0];

  for(let letter of mapping[num]) {
    if (dict[letter] && dict[letter]['$']) {
      words.push(str + letter);
    }

    if (dict[letter]) {
      searchDict(nums.slice(1), dict[letter], str + letter, words);
    }
  }

  return words;
}

const dictionary = ['used', 'tree', 'cat', 'bear', 'tpee','work']
console.log(t9(8733, dictionary));
