'use strict';

module.exports = {
  conditions: [''],
  name: 'EqualityExpression_In',
  rules: ['RelationalExpression_In', 'EqualityExpression_In EqualityOperator RelationalExpression_In'],
  handlers: ['$$ = $1;', '$$ = new (require(\'./ast/EqualityExpression\').EqualityExpressionNode)($2, $1, $3, { loc: this._$, yy })'],
  subRules: [require('./RelationalExpression_In')]
};