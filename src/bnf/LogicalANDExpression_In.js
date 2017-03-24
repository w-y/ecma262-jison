module.exports = {
  conditions: [''],
  name: 'LogicalANDExpression_In',
  rules: [
    'BitwiseORExpression_In',
    'LogicalANDExpression_In && BitwiseORExpression_In',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./BitwiseORExpression_In'),
  ],
};
