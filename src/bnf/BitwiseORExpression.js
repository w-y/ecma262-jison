module.exports = {
  conditions: [''],
  name: 'BitwiseORExpression',
  rules: [
    'BitwiseXORExpression',
    'BitwiseORExpression | BitwiseXORExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./BitwiseXORExpression'),
  ],
};
