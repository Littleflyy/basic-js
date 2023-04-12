const { NotImplementedError } = require('../extensions/index.js');


function countCats(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] == '^^') {
        count = count + 1;
      }
      else {
        continue;
      }
    }
  }
  return count;
}


module.exports = {
  countCats
};
