module.exports = {
  conditions: [''],
  name: 'MemberExpression',
  rules: [
    'PrimaryExpression',
    'MemberExpression [ Expression_In ]',
    'MemberExpression . IdentifierName',
    'SuperProperty',
    'MetaProperty',
    'new MemberExpression Arguments',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').MemberExpressionNode)($1, $3, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').MemberExpressionNode)($1, $3, { loc: this._$, lexer: yy.lexer })',
    '$$ = $1',
    '$$ = $1',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').NewExpressionNode)($2, $3, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./PrimaryExpression'),
    require('./Expression_In'),
    require('./IdentifierName'),
    require('./SuperProperty'),
    require('./MetaProperty'),
    require('./Arguments'),
  ],
};
