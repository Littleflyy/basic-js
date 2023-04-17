const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("\'arr\' parameter must be an instance of the Array!");
  }
  const doNext = "--double-next";
  const disNext = "--discard-next";
  const disPrev = "--discard-prev";
  const doPrev = "--double-prev";


  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };

  const newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(doNext) == newArr.length - 1) {
      newArr.splice(arr.indexOf(doNext));
    }
    if (newArr[i] == doNext) {
      let indexDN = newArr.indexOf(doNext);
      let item = newArr[indexDN + 1];
      let index = newArr.indexOf(doNext);
      newArr.insert(index, item);
      newArr.splice(newArr.indexOf(doNext), 1)
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(disNext) == newArr.length - 1) {
      newArr.splice(newArr.indexOf(disNext));
    }
    if (newArr[i] == disNext) {
      let index = newArr.indexOf(disNext);
      newArr.splice(index + 1, 1)
      newArr.splice(index, 1);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(disPrev) == 0) {
      newArr.shift();
    }
    if (newArr[i] == disPrev) {
      let index = i;
      newArr.splice(index - 1, 1)
      newArr.splice(index - 1, 1)
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(doPrev) == 0) {
      newArr.shift();
    }
    if (newArr[i] == doPrev) {
      let indexDN = newArr.indexOf(doPrev);
      let item = newArr[indexDN - 1];
      let index = newArr.indexOf(doPrev);
      newArr.insert(index, item);
      newArr.splice(newArr.indexOf(doPrev), 1)
    }
  }

  return newArr;
}

module.exports = {
  transform
};
