const dayJs = require("dayjs");

const dateFormat = function (date) {
  let formatDate = dayJs(date).format("MM/DD/YYYY");
  return formatDate;
};

module.exports = dateFormat;
