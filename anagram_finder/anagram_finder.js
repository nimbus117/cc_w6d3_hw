const AnagramFinder = function (word) {
  this.word = word.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let result = otherWords.filter(word => word.length === this.word.length);
  result = result.filter(word => word !== this.word);
  result = result.filter(word => {
    return word.toLowerCase().split('').every(letter => {
      return this.word.toLowerCase().includes(letter);
    })
  })
  return result;
}

module.exports = AnagramFinder;
