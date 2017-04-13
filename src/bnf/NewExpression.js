module.exports = {
  conditions: [''],
  name: 'NewExpression',
  rules: [
    'MemberExpression',
    'new NewExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').NewExpressionNode)($2, [])',
  ],
  subRules: [
    require('./MemberExpression'),
  ],
};
