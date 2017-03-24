module.exports = {
  conditions: [''],
  name: 'BitwiseXORExpression_In',
  rules: [
    'BitwiseANDExpression_In',
    'BitwiseXORExpression_In ^ BitwiseANDExpression_In',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./BitwiseANDExpression_In'),
  ],
};
