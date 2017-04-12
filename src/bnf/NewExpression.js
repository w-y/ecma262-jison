module.exports = {
  conditions: [''],
  name: 'NewExpression',
  rules: [
    'MemberExpression',
    'new NewExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/LeftHandleSideExpression\').NewExpressionNode)($2)',
  ],
  subRules: [
    require('./MemberExpression'),
  ],
};
