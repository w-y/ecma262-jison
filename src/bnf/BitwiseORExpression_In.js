module.exports = {
  conditions: [''],
  name: 'BitwiseORExpression_In',
  rules: [
    'BitwiseXORExpression_In',
    'BitwiseORExpression_In | BitwiseXORExpression_In',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./BitwiseXORExpression_In'),
  ],
};
