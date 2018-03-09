'use strict';

module.exports = {
  conditions: [''],
  name: 'MultiplicativeExpression',
  rules: ['ExponentiationExpression', 'MultiplicativeExpression MultiplicativeOperator ExponentiationExpression', 'MultiplicativeExpression * ExponentiationExpression'],
  handlers: ['$$ = $1', '$$ = new (require(\'./ast/MultiplicativeExpression\').MultiplicativeExpressionNode)($2, $1, $3, { loc: this._$, yy })', '$$ = new (require(\'./ast/MultiplicativeExpression\').MultiplicativeExpressionNode)($2, $1, $3, { loc: this._$, yy })'],
  subRules: [require('./ExponentiationExpression')]
};