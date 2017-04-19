const fs = require('fs');
const parser = require('./parser');
const { isWhiteSpace, isLineTerminator } = require('./util');

const BITE_SIZE = 256;
const values = [];

let file = null;
let readbytes = 0;

fs.open('./test.js', 'r', (err, fd) => {
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
  const offset = ex.hash.offset - text.length;

  if (token === ';' && ex.hash.failedAutoSemicolon) {
    return -1;
  }
  // NOTICE: the end of the input stream of tokens
  if (token === 1) {
    console.log('rule 1');
    return offset;
  }
  if (token === '}') {
    console.log('rule 4');
    return offset;
  }

  let prevPtr = offset;

  while (prevPtr >= 0 && isWhiteSpace(source[prevPtr])) {
    prevPtr -= 1;
  }

  // The previous token is )
  // the inserted semicolon would then be parsed as the terminating semicolon of a do-while statement
  // TODO: only do-while
  if (source[prevPtr] === ')') {
    console.log('rule 3');
    return offset;
  }

  // The offending token is separated from the previous token by at least one LineTerminator.
  if (isLineTerminator(source[prevPtr])) {
    console.log('rule 2');
    return offset;
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

  function applyRule(s, ex) {
    const test = canApplyRule(s, ex);
    if (test > 0) {
      parser.parser.yy.autoinsertion = test;
      parser.parser.yy.autoinsertion_loc = getNextLoc(ex.hash.loc);
      return newSource = `${src.substring(0, test)};${src.substring(test)}`;
    }
    return false;
  }
  const i = 0;
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
