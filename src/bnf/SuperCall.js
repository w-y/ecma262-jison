module.exports = {
  conditions: [''],
  name: 'SuperCall',
  rules: [
    'super Arguments',
  ],
  handlers: [
    '$$ = new (require(\'./ast/LeftHandSideExpression\').SuperCallExpressionNode)($2, [])',
  ],
  subRules: [
    require('./Arguments'),
  ],
};
