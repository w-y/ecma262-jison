module.exports = {
  conditions: [''],
  name: 'LogicalANDExpression',
  rules: [
    'BitwiseORExpression',
    'LogicalANDExpression && BitwiseORExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./BitwiseORExpression'),
  ],
};
