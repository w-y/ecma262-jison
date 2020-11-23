'use strict';

module.exports = function asi(context, exp, err, lastLoc) {
  return new (require('../ast/ThrowStatementNode'))(exp, { loc: lastLoc, yy: context.yy });
};