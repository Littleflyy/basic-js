const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const now = new Date();

  if (!date) {
    return 'Unable to determine the time of year!';
  }
  else if (isNaN(Date.parse(date))) {
    throw Error("Invalid date!");
  }
  else if (Date.parse(now) == Date.parse(date)) {
    throw Error("Invalid date!");
  }
  const winter = [0, 1, 11];
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];

  const autumn = [8, 9, 10];

  let month = date.getMonth();

  if (winter.includes(month) == true) {
    return 'winter';
  }
  else if (spring.includes(month) == true) {
    return 'spring';
  }
  else if (summer.includes(month) == true) {
    return 'summer';
  }
  else if (autumn.includes(month)) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
