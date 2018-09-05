const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('');
}

// PangramFinder.prototype.isPangram = function () {
//   result = true;
//   const phrase = this.phrase
//   this.alphabet.forEach(letter => {
//     if (!(phrase.includes(letter))) {
//       result = false;
//     }
//   })
//   return result
// }

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(letter => {
    return this.phrase.includes(letter);
  })
}

module.exports = PangramFinder;
