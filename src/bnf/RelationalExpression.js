module.exports = {
  conditions: [''],
  name: 'RelationalExpression',
  rules: [
    'ShiftExpression',
    'RelationalExpression RelationalOperator ShiftExpression',
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
