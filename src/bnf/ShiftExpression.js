module.exports = {
  conditions: [''],
  name: 'ShiftExpression',
  rules: [
    'AdditiveExpression',
    'ShiftExpression ShiftOperator AdditiveExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./AdditiveExpression'),
  ],
};
