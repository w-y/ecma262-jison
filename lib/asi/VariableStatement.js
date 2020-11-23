'use strict';

// const getLoc = require('../util').getLoc;

module.exports = function asi(context, item, err, lastLoc) {
  return new (require('../ast/VariableStatement').VariableStatementNode)(item, { loc: lastLoc, yy: context.yy });
};