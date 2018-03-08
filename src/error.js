function ParseError(msg, hash) {
  this.message = msg;
  this.hash = hash;
  this.lineNumber = hash.loc.first_line;
  this.column = hash.loc.first_column;
  this.index = hash.loc.range[0];
}

ParseError.prototype = Object.create(Error.prototype);

function NoLineTerminatorError(msg, hash) {
  this.message = msg;
  this.hash = hash;
}

NoLineTerminatorError.prototype = Object.create(Error.prototype);


function InvalidASIError(msg, hash) {
  this.message = msg;
  this.hash = hash;
}

InvalidASIError.prototype = Object.create(Error.prototype);


exports.ParseError = ParseError;
exports.NoLineTerminatorError = NoLineTerminatorError;
exports.InvalidASIError = InvalidASIError;
