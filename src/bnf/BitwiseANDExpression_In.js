module.exports = {
  conditions: [''],
  name: 'BitwiseANDExpression_In',
  rules: [
    'EqualityExpression_In',
    'BitwiseANDExpression_In & EqualityExpression_In',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./EqualityExpression_In'),
  ],
};
