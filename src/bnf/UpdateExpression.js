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
    '$$ = new (require(\'./ast/UpdateExpression\').UpdateExpressionNode)($2, $1, false)',
    '$$ = new (require(\'./ast/UpdateExpression\').UpdateExpressionNode)($1, $2, true)',
  ],
  subRules: [
    require('./LeftHandSideExpression'),
  ],
};
