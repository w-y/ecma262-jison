module.exports = {
  conditions: [''],
  name: 'RelationalExpression_In',
  rules: [
    'ShiftExpression',
    'RelationalExpression_In RelationalOperator ShiftExpression',
    'RelationalExpression_In in ShiftExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./ShiftExpression'),
  ],
};
