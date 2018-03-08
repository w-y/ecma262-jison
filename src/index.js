const autoinsertion = require('./autoinsertion');

module.exports.parse = function (src, opts) {
  return autoinsertion(src, opts);
};
