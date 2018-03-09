'use strict';

module.exports = {
  conditions: [''],
  name: 'BitwiseANDExpression_In',
  rules: ['EqualityExpression_In', 'BitwiseANDExpression_In & EqualityExpression_In'],
  handlers: ['$$ = $1;', '$$ = new (require(\'./ast/BitwiseExpression\').BitwiseANDExpressionNode)($2, $1, $3, { loc: this._$, yy })'],
  subRules: [require('./EqualityExpression_In')]
};