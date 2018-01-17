const { isLineTerminator } = require('./util');
const { ParseError } = require('./error');
const parser = require('./parser');
const { lookBehind } = require('./util');

const EOF = 1;

/**
 * "
 *  The JS Interpreter finds an error,
 *  adds a semicolon,
 *  and runs the whole thing again."
 *                                -- Doug Crockford
 * when parse again, we need to reset all the flags
 */

function canApplyRule(source, ex) {
  // lexical error
  if (!ex.hash || !ex.hash.loc) {
    return false;
  }
  const token = ex.hash.token;
  const text = ex.hash.text;
  const range = ex.hash.loc.range;
  const tokenOffset = range[0];

  if (token === '";"' && ex.hash.failedAutoSemicolon) {
    return -1;
  }

  // NOTICE: the end of the input stream of tokens
  if (token === EOF) {
    return tokenOffset;
  }
  // The offending token is }
  if (token === '"}"') {
    return tokenOffset;
  }

  // recover from no LineTerminator exception
  if (ex.hash.exception instanceof require('./error').NoLineTerminatorError) {
    // ++/--
    if (text === '++' || text === '--') {
      return lookBehind(
          source.substring(0, ex.hash.exception.hash.offset + 1), 0, true, false).index;
    }
    return ex.hash.loc.range[1] - 1;
  }

  const { index: prevOffset } = lookBehind(source.substring(0, tokenOffset), 0, true, false);

  // The previous token is )
  // the inserted semicolon would then be parsed as the terminating semicolon
  // of a do-while statement
  // TODO: only do-while
  if (source[prevOffset] === ')') {
    return prevOffset + 1;
  }

  // The offending token is separated from the previous token by at least one LineTerminator.
  if (isLineTerminator(source[prevOffset])) {
    return prevOffset + 1;
  }
  return -1;
}

function isEOF(ex) {
  return ex.hash && ex.hash.token === EOF;
}

function autoinsertion(source) {
  let res = null;
  let src = source;

  // enable range info in loc
  parser.parser.lexer.options.ranges = true;

  // custom error handler
  parser.Parser.prototype.parseError = function (str, hash) {
    if (hash.recoverable) {
      this.trace(str);
    } else {
      throw new ParseError(str, hash);
    }
  };

  // jison-gho
  // parser.Parser.prototype.originalParseError = function (str, hash) {};

  function reloadParser() {
    parser.parser.yy.autoInsertions = [];
    parser.parser.yy.autoInsertionCount = 0;
    parser.parser.yy.autoInsertionOffset = 0;
    parser.parser.yy.originEx = null;
    parser.parser.yy.comments = null;
  }

  function applyRule(s, ex) {
    const test = canApplyRule(s, ex);

    // make sure this will end
    if (test === parser.parser.yy.autoInsertionOffset ||
        test === parser.parser.yy.autoInsertionOffset + 1) {
      return false;
    }

    if (test > 0) {
      // NOTICE: range should be ajusted by subtracting number of inserted semicolons
      // range is [a, b) (>=a && < b), so plus one to compare with range[1]
      // test + 1 is range upper boundery
      // test is semicolon self
      // test - 1 is the char before insertion
      parser.parser.yy.autoInsertionOffset = test;

      if (!parser.parser.yy.autoInsertionCount) {
        parser.parser.yy.autoInsertionCount = 1;
        parser.parser.yy.autoInsertions = [test + 1];
      } else {
        parser.parser.yy.autoInsertionCount += 1;
        parser.parser.yy.autoInsertions.push(test + 1);
      }

      const newSrc = `${src.substring(0, test)};${src.substring(test)}`;
      return newSrc;
    }
    return false;
  }

  let lastTime = Date.now();
  let count = 0;

  while (true) {
    lastTime = Date.now();
    count += 1;
    try {
      res = parser.parse(src);
      if (res) {
        reloadParser();
        return res;
      }
    } catch (ex) {
      if (!parser.parser.yy.originEx) {
        parser.parser.yy.originEx = ex;
      }
      src = applyRule(src, ex);
      console.warn(`retry ${count} times time parsed: ${Date.now() - lastTime}`);
      if (!src) {
        const originEx = parser.parser.yy.originEx;
        reloadParser();
        // empty file
        if (isEOF(originEx)) {
          break;
        } else {
          throw originEx;
        }
      }
    }
  }
  return false;
}

module.exports = autoinsertion;
