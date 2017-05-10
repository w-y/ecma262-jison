function ParseError(msg, hash) {
  this.message = msg;
  this.hash = hash;
}

ParseError.prototype = Object.create(Error.prototype);

function NoLineTerminatorError(msg, hash) {
  this.message = msg;
  this.hash = hash;
}

NoLineTerminatorError.prototype = Object.create(Error.prototype);

exports.ParseError = ParseError;
exports.NoLineTerminatorError = NoLineTerminatorError;
