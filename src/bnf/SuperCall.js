module.exports = {
  conditions: [''],
  name: 'SuperCall',
  rules: [
    'super Arguments',
  ],
  handlers: [
    '$$ = new (require(\'./ast/LeftHandSideExpression\').SuperCallExpressionNode)($2, [], { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./Arguments'),
  ],
};
