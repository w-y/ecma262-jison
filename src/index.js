const autoinsertion = require('./autoinsertion');

module.exports.parse = function(src, opts) {

  // NOTICE:
  // add a Line Terminator manually
  // change statement like a to a\n which can apply the automatcic insertion rule

  return autoinsertion(src + '\n', opts);
}
