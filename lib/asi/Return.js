'use strict';

module.exports = function asi(context, exp, err, lastLoc) {
  return new (require('../ast/ReturnStatementNode'))(exp, { loc: lastLoc, yy: context.yy });
};