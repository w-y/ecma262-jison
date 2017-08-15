const autoinsertion = require('./autoinsertion');

module.exports.parse = function (src, opts) {
  // NOTICE:
  // add a Line Terminator manually
  // change statement like a to a\n which can apply the automatcic insertion rule

  if (src[src.length - 1] === '\n') {
    return autoinsertion(src, opts);
  }
  return autoinsertion(`${src}\n`, opts);
};
