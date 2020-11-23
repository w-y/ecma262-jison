'use strict';

var getLoc = require('../util').getLoc;

module.exports = function asi(context, item) {
  return new (require('../ast/ExpressionStatement').ExpressionStatementNode)(item, { loc: getLoc(item), yy: context.yy });
};