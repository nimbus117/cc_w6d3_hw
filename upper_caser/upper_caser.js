const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function() {
  return this.words.map(p => p.toUpperCase());

}

module.exports = UpperCaser;
