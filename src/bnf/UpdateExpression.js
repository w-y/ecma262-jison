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
    '$$ = $1 + $2',
    '$$ = $1 + $2',
  ],
  subRules: [
    require('./LeftHandSideExpression'),
  ],
};
