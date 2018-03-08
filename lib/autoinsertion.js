'use strict';

var _require = require('./util'),
    isLineTerminator = _require.isLineTerminator;

var _require2 = require('./error'),
    ParseError = _require2.ParseError;

var parser = require('./parser');

var _require3 = require('./util'),
    lookBehind = _require3.lookBehind;

function isEOF(ex) {
  // jison EOF = 1
  // jison gho EOF = 'end of input'
  return ex.hash && ex.hash.token === 1 || ex.hash.token === 'end of input';
}

/**
 * "
 *  The JS Interpreter finds an error,
 *  adds a semicolon,
 *  and runs the whole thing again."
 *                                -- Doug Crockford
 *
 * when parse again, we need to reload the parser
 */

function canApplyRule(source, ex) {
  // lexical error
  if (!ex.hash || !ex.hash.loc) {
    return false;
  }
  var text = ex.hash.text;
  var range = ex.hash.loc.range;
  var tokenOffset = range[0];

  if (text === ';' && ex.hash.exception instanceof require('./error').InvalidASIError) {
    return -1;
  }

  // NOTICE: the end of the input stream of tokens
  if (isEOF(ex)) {
    return tokenOffset;
  }
  // The offending token is }
  if (text === '}') {
    return tokenOffset;
  }

  // recover from no LineTerminator exception
  if (ex.hash.exception instanceof require('./error').NoLineTerminatorError) {
    // ++/--
    if (text === '++' || text === '--') {
      return lookBehind(source.substring(0, ex.hash.exception.hash.offset + 1), 0, true, false).index;
    }
    return ex.hash.loc.range[1] - 1;
  }

  var _lookBehind = lookBehind(source.substring(0, tokenOffset), 0, true, false),
      prevOffset = _lookBehind.index;

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

function autoinsertion(source) {
  var res = null;
  var src = source;

  // enable range info in loc for original jison
  parser.parser.lexer.options.ranges = true;

  // custom error handler for original jison
  parser.Parser.prototype.parseError = function (str, hash) {
    if (hash.recoverable) {
      this.trace(str);
    } else {
      throw new ParseError(str, hash);
    }
  };

  function reloadParser() {
    parser.parser.yy.autoInsertions = [];
    parser.parser.yy.autoInsertionCount = 0;
    parser.parser.yy.autoInsertionOffset = 0;
    parser.parser.yy.originEx = null;
    parser.parser.yy.comments = null;
  }

  function applyRule(s, ex) {
    var test = canApplyRule(s, ex);

    // make sure this will end
    if (test === parser.parser.yy.autoInsertionOffset || test === parser.parser.yy.autoInsertionOffset + 1) {
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

      var newSrc = src.substring(0, test) + ';' + src.substring(test);
      return newSrc;
    }
    return false;
  }

  var lastTime = Date.now();
  var count = 0;

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
      console.warn('retry ' + count + ' times time parsed: ' + (Date.now() - lastTime));
      if (!src) {
        var originEx = parser.parser.yy.originEx;
        // empty file
        if (isEOF(originEx)) {
          break;
        } else {
          originEx.exception = ex;
          reloadParser();
          // throw originEx;
          throw new ParseError(ex.message, ex.hash);
        }
      }
    }
  }
  res = new (require('./ast/ScriptNode'))([], {
    loc: parser.parser.yy.originEx.hash.loc,
    yy: parser.parser.yy
  });
  reloadParser();
  return res;
}

module.exports = autoinsertion;