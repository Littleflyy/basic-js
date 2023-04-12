const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let number = 0;

  const mass1 = s1.split('');
  const mass2 = s2.split('');

  for (let i = 0; i < mass1.length; i++) {
    const index = mass2.indexOf(mass1[i]);
    if (index !== -1) {
      mass2.splice(index, 1);
      number += 1;
    }
  }

  return number;
}

module.exports = {
  getCommonCharacterCount
};
