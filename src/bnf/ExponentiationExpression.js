module.exports = {
  conditions: [''],
  name: 'ExponentiationExpression',
  rules: [
    'UnaryExpression',
    'UpdateExpression ** ExponentiationExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./UnaryExpression'),
    require('./UpdateExpression'),
  ],
};
