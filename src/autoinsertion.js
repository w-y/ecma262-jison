const fs = require('fs');
const parser = require('./parser');
const { isWhiteSpace, isLineTerminator } = require('./util');

const { ParseError } = require('./error');

const BITE_SIZE = 256;
const values = [];

let file = null;
let readbytes = 0;

function canApplyRule(source, ex) {
  const token = ex.hash.token;
  const range = ex.hash.loc.range;
  let tokenOffset = range[1];

  while (isWhiteSpace(source[tokenOffset]) || isLineTerminator(source[tokenOffset])) {
    tokenOffset += 1;
  }
  if (token === ';' && ex.hash.failedAutoSemicolon) {
    return -1;
  }
  // NOTICE: the end of the input stream of tokens
  if (token === 1) {
    return tokenOffset;
  }
  // The offending token is }
  if (token === '}') {
    return tokenOffset;
  }

  // recover no LineTerminator here
  if (ex instanceof require('./error').NoLineTerminatorError) {
    tokenOffset = ex.hash.loc.range[0] - 1;
    while (isWhiteSpace(source[tokenOffset]) || isLineTerminator(source[tokenOffset])) {
      tokenOffset -= 1;
    }
    return tokenOffset + 1;
  }

  let prevPtr = tokenOffset - 1;

  while (prevPtr >= 0 && isWhiteSpace(source[prevPtr])) {
    prevPtr -= 1;
  }
  // The previous token is )
  // the inserted semicolon would then be parsed as the terminating semicolon
  // of a do-while statement
  // TODO: only do-while
  if (source[prevPtr] === ')') {
    console.log('rule 3');
    return tokenOffset;
  }

  // The offending token is separated from the previous token by at least one LineTerminator.
  if (isLineTerminator(source[prevPtr])) {
    console.log('rule 2');
    return tokenOffset;
  }
  return -1;
}

function autoinsertion(source) {
  let res = null;
  let src = source;
  parser.parser.lexer.options.ranges = true;

  parser.Parser.prototype.parseError = function (str, hash) {
    if (hash.recoverable) {
      this.trace(str);
    } else {
      throw new ParseError(str, hash);
    }
  };

  function applyRule(s, ex) {
    const test = canApplyRule(s, ex);
    if (test > 0) {
      parser.parser.yy.autoInsertionOffset = test + 1;
      const newSrc = `${src.substring(0, test)};${src.substring(test)}`;
      console.log(newSrc);
      return newSrc;
    }
    return false;
  }
  while (true) {
    try {
      res = parser.parse(src);
      if (res) {
        console.log(res);
        break;
      }
    } catch (ex) {
      if (!parser.parser.yy.originEx) {
        parser.parser.yy.originEx = ex;
      }
      src = applyRule(src, ex);
      if (!src) {
        console.log(parser.parser.yy.originEx);
        break;
      }
    }
  }
}

function readsome() {
  const stats = fs.fstatSync(file); // yes sometimes async does not make sense!
  if (stats.size < readbytes + 1) {
    autoinsertion(values.join(''));
  } else {
    fs.read(file, new Buffer(BITE_SIZE), 0, BITE_SIZE, readbytes, (err, bytecount, buff) => {
      if (err) {
        throw new Error(err);
      }
      values.push(buff.toString('utf-8', 0, bytecount));
      readbytes += bytecount;
      process.nextTick(readsome);
    });
  }
}

fs.open('./testtest.js', 'r', (err, fd) => {
  file = fd;
  readsome();
});

