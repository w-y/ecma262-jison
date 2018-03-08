'use strict';

module.exports = {
  conditions: [''],
  name: 'BitwiseORExpression_In',
  rules: ['BitwiseXORExpression_In', 'BitwiseORExpression_In | BitwiseXORExpression_In'],
  handlers: ['$$ = $1;', '$$ = new (require(\'./ast/BitwiseExpression\').BitwiseORExpressionNode)($2, $1, $3, { loc: this._$, yy })'],
  subRules: [require('./BitwiseXORExpression_In')]
};