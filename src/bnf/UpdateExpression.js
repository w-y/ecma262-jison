module.exports = {
  conditions: [''],
  name: 'UpdateExpression',
  rules: [
    'LeftHandSideExpression',
    'LeftHandSideExpression UpdateOperator',
    'UpdateOperator LeftHandSideExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/UpdateExpression\').UpdateExpressionNode)($2, $1, false, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/UpdateExpression\').UpdateExpressionNode)($1, $2, true, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./LeftHandSideExpression'),
  ],
};
