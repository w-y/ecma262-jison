function ParseError (msg, hash) {
  this.message = msg;
  this.hash = hash;
}

ParseError.prototype = Error;

function NoLineTerminatorError(msg, hash) {
  this.message = msg;
  this.hash = hash;
}

NoLineTerminatorError.prototype = Error;

exports.ParseError = ParseError;
exports.NoLineTerminatorError = NoLineTerminatorError;
