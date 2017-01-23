// Design a method to find the frequency of occurences of a given word in a book.
// What if we were running this algorithm multple times?

/*
Seems like we'd have to iterate through the book. Perhaps this made a lot faster with elastic search.

Ask about the structure of the book (one massive string? Array?). Ask about what counts as a match.
May need to implement proper REGEX method to format words in book. Do this upfront.

While we iterate through, we'll have to be mindful of capitalization and punctuation.

Since we will be running this many times, we'll want to cache results. Probably in a hash map.
*/

class WordFreq {
  constructor(book) {
    this.book = book.split(' ');
    this.dictionary = {};

    this.getFrequency = this.getFrequency.bind(this);
    this.findFrequency = this.findFrequency.bind(this);
  }

  getFrequency(word) {
    word = word.toLowerCase().trim();
    if (this.dictionary[word]) {
      return this.dictionary[word];
    } else {
      return this.findFrequency(word);
    }
  }

  findFrequency(word) {
    let count = 0;

    for(let str of this.book) {
      if (str.toLowerCase().trim() === word) {
        count += 1;
      }
    }

    this.dictionary[word] = count;

    return count;
  }
}
