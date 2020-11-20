const lookBehind = require('../util').lookBehind;
const isLineTerminator = require('../util').isLineTerminator;
const getLoc = require('../util').getLoc;

module.exports = function asi(context, exp, loc) {
  const matched = context.yy.lexer.matched;
  const range = loc.range;

  const { ch: beforeToken, index: beforeIndex } = lookBehind(matched, 0, true, false);

  const newLoc = getLoc(exp);
  newLoc.range = [range[0], beforeIndex];

  if (isLineTerminator(beforeToken)) {
    return new (require('../ast/ReturnStatementNode'))(null, { loc: newLoc, yy: context.yy });
  }

  // NOTICE: should not be here
  return new (require('../ast/ReturnStatementNode'))(null, { loc: newLoc, yy: context.yy });
};
