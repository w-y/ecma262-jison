function ParseError (msg, hash) {
  this.message = msg;
  this.hash = hash;
}

ParseError.prototype = Error;

exports.ParseError = ParseError;
