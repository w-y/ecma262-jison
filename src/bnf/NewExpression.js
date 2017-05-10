module.exports = {
  conditions: [''],
  name: 'NewExpression',
  rules: [
    'MemberExpression',
    'new NewExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').NewExpressionNode)($2, [], { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./MemberExpression'),
  ],
};
