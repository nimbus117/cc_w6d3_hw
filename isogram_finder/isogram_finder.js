const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  return this.word.every((letter, index, array) => {
    // return array.filter(x => x === letter).length <= 1;
    return array.indexOf(letter) === index;
  })
};

module.exports = IsogramFinder;
