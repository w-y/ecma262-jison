module.exports = {
  conditions: [''],
  name: 'MultiplicativeExpression',
  rules: [
    'ExponentiationExpression',
    'MultiplicativeExpression MultiplicativeOperator ExponentiationExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./ExponentiationExpression'),
  ],
};
