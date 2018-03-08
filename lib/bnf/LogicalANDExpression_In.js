'use strict';

module.exports = {
  conditions: [''],
  name: 'LogicalANDExpression_In',
  rules: ['BitwiseORExpression_In', 'LogicalANDExpression_In && BitwiseORExpression_In'],
  handlers: ['$$ = $1', '$$ = new (require(\'./ast/LogicalExpression\').LogicalANDExpressionNode)($2, $1, $3, { loc: this._$, yy })'],
  subRules: [require('./BitwiseORExpression_In')]
};