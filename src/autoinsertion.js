const fs = require('fs');
const parser = require('./parser');
const { isWhiteSpace, isLineTerminator } = require('./util');

const { ParseError } = require('./error');

const BITE_SIZE = 256;
const values = [];

let file = null;
let readbytes = 0;

fs.open('./testtest.js', 'r', (err, fd) => {
  file = fd;
  readsome();
});

function readsome() {
  const stats = fs.fstatSync(file); // yes sometimes async does not make sense!
  if (stats.size < readbytes + 1) {
    autoinsertion(values.join(''));
  } else {
    fs.read(file, new Buffer(BITE_SIZE), 0, BITE_SIZE, readbytes, processsome);
  }
}

function processsome(err, bytecount, buff) {
  if (err) {
    throw new Error(err);
  }
  values.push(buff.toString('utf-8', 0, bytecount));

  readbytes += bytecount;
  process.nextTick(readsome);
}

//
// The offending token is }.
//

function canApplyRule(source, ex) {
  const token = ex.hash.token;
  const text = ex.hash.text;

  const ranges = ex.hash.ranges;
  console.log(ranges);

  if (token === ';' && ex.hash.failedAutoSemicolon) {
    return -1;
  }
  // NOTICE: the end of the input stream of tokens
  if (token === 1) {
    return ranges[0];
  }
  // The offending token is }
  if (token === '}') {
    return ranges[0];
  }

  let prevPtr = ranges[0] - 1;

  while (prevPtr >= 0 && isWhiteSpace(source[prevPtr])) {
    prevPtr -= 1;
  }

  // The previous token is )
  // the inserted semicolon would then be parsed as the terminating semicolon of a do-while statement
  // TODO: only do-while
  if (source[prevPtr] === ')') {
    console.log('rule 3');
    return ranges[0];
  }

  // The offending token is separated from the previous token by at least one LineTerminator.
  if (isLineTerminator(source[prevPtr])) {
    console.log('rule 2');
    return ranges[0];
  }
  return -1;
}

function getNextLoc(loc) {
  return {
    first_line: loc.first_line,
    last_line: loc.last_line,
    first_column: loc.first_column + 1,
    last_column: loc.last_column + 1,
  };
}

function autoinsertion(source) {
  let res = null;
  let src = source;

  parser.Parser.prototype.parseError = function(str, hash) {
    if (hash.recoverable) {
      this.trace(str);
    } else {
      throw new ParseError(str, hash);
    }
  };

  function applyRule(s, ex) {
    const test = canApplyRule(s, ex);
    if (test > 0) {
      parser.parser.yy.autoinsertion = test;
      parser.parser.yy.autoinsertion_loc = getNextLoc(ex.hash.loc);
      newSrc = src.substring(0, test) + ';' + src.substring(test);
      return newSrc;
    }
    return false;
  }
  let i = 0;
  while (true) {
    try {
      res = parser.parse(src);
      if (res) {
        console.log(res);
        break;
      }
    } catch (ex) {
      console.log(ex);
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
