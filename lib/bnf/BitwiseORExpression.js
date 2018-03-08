'use strict';

module.exports = {
  conditions: [''],
  name: 'BitwiseORExpression',
  rules: ['BitwiseXORExpression', 'BitwiseORExpression | BitwiseXORExpression'],
  handlers: ['$$ = $1;', '$$ = new (require(\'./ast/BitwiseExpression\').BitwiseORExpressionNode)($2, $1, $3, { loc: this._$, yy })'],
  subRules: [require('./BitwiseXORExpression')]
};