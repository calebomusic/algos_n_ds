// Each year, the gov releases a list of 10000 most common baby names
// and their frequencies (the number of babies with that name). The only
// problem with this is that some names have multiple spellings. For example,
// "John" and "Jon" are essentially the same name but would be listed seperately.
// Given two lists, one of names/frequenes and the other of pairs of equivalent names,
// Write a algorithm to print a new list of the true frequency of each name.
// Note that the relation is both transitive and symmetric.

// Example:
// I: John(15), Jon(12), Chris(13), Kris(4), Christopher(19)
// (John, Jon)(John, Johnny)(Chris, Kris)(Chris, Christopher)
// O: John(27), Chris(36)

/*
  Use adjacency list to create a mapping of primary name to synonyms.
  The list will look like {synonym: primaryName}. First check if the either name
  has been seen before, if so then map the other name to the that primary name the seen name maps to.
  If neither exist, set the first to be a primaryName. If both exist, continue.
  This should keep track of all dependencies.

  Then loop through all counts to create the result hash.
  If a name does not exist in the mapping of primary names to synonyms
  we know that it is a primary name. So add it to the account.
  If the name does exist, then add to the primary name's total in the result hash.
*/

function babyNames(nameCounts, synonyms) {
  let map = synonymsMap(synonyms),
      result = {};

  for(let name of Object.keys(nameCounts)) {
    let count = nameCounts[name];
    if (map[name] === undefined) {
      var primaryName = name;
    } else {
      var primaryName = map[name];
    }

    if (result[primaryName] === undefined) {
      result[primaryName] = count;
    } else {
      result[primaryName] += count
    }
  }

  return result;
}

function synonymsMap(synonyms) {
  let map = {};

  for (let [name1, name2] of synonyms) {
    if (map[name1] && map[name2] === undefined) {
      map[name2] = map[name1];
    } else if(map[name1] === undefined && map[name2]) {
      map[name1] = map[name2];
    } else if(map[name1] === undefined && map[name2] === undefined) {
      map[name2] = name1;
    }
  }

  return map;
}

const John = 'John',
      Jon = 'Jon',
      Johnny = 'Johnny',
      Chris = 'Chris',
      Kris = 'Kris',
      Christopher =  'Christopher';

let counts = { John: 15, Jon: 12, Chris: 13, Kris: 4, Christopher: 19 },
    synonyms = [[John, Jon],[John, Johnny],[Chris, Kris],[Chris, Christopher]];

console.log(babyNames(counts, synonyms));
