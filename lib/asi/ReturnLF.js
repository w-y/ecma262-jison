'use strict';

var lookBehind = require('../util').lookBehind;
var isLineTerminator = require('../util').isLineTerminator;
var getLoc = require('../util').getLoc;

module.exports = function asi(context, exp, loc) {
  var matched = context.yy.lexer.matched;
  var range = loc.range;

  var _lookBehind = lookBehind(matched, 0, true, false),
      beforeToken = _lookBehind.ch,
      beforeIndex = _lookBehind.index;

  var newLoc = getLoc(exp);
  newLoc.range = [range[0], beforeIndex];

  if (isLineTerminator(beforeToken)) {
    return new (require('../ast/ReturnStatementNode'))(null, { loc: newLoc, yy: context.yy });
  }

  // NOTICE: should not be here
  return new (require('../ast/ReturnStatementNode'))(null, { loc: newLoc, yy: context.yy });
};