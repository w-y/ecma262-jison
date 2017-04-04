module.exports = {
  conditions: [''],
  name: 'NewExpression',
  rules: [
    'MemberExpression',
    'new NewExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2',
  ],
  subRules: [
    require('./MemberExpression'),
  ],
};
