module.exports = {
  conditions: [''],
  name: 'BitwiseANDExpression',
  rules: [
    'EqualityExpression',
    'BitwiseANDExpression & EqualityExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./EqualityExpression'),
  ],
};
