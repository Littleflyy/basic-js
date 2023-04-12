const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(a) {
  if (Array.isArray(a) == false) {
    return false;
  }
  else if (a.length == 0) {
    return false;
  }
  let dreamName = '';
  for (i = 0; i < a.length; i++) {
    if (typeof a[i] == 'string') {
      a[i] = a[i].split(/\s+/).join('');
      dreamName = dreamName + a[i][0];
    }
    else {
      continue;
    }
  }
  dreamName = dreamName.toUpperCase().split('').sort().join('')
  return dreamName;
}


module.exports = {
  createDreamTeam
};
