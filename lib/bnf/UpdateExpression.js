'use strict';

module.exports = {
  conditions: [''],
  name: 'UpdateExpression',
  rules: ['LeftHandSideExpression', 'LeftHandSideExpression UpdateOperator', 'UpdateOperator LeftHandSideExpression', 'LFUpdateOperator LeftHandSideExpression'],
  handlers: ['$$ = $1', '$$ = new (require(\'./ast/UpdateExpression\').UpdateExpressionNode)($2, $1, false, { loc: this._$, yy })', '$$ = new (require(\'./ast/UpdateExpression\').UpdateExpressionNode)($1, $2, true, { loc: this._$, yy })', '$$ = new (require(\'./ast/UpdateExpression\').UpdateExpressionNode)($1, $2, true, { loc: this._$, yy })'],
  subRules: [require('./LeftHandSideExpression')]
};