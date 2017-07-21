module.exports = {
  conditions: [''],
  name: 'MemberExpression',
  rules: [
    'PrimaryExpression',
    /* 'MemberExpression [ Expression_In ]',
    'MemberExpression . IdentifierName',
    'SuperProperty',
    'MetaProperty',
    'new MemberExpression Arguments',*/
  ],
  // TODO: IdentifierNode add loc info
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').MemberExpressionNode)($1, $3, true, { loc: this._$, yy })',
    `
      $$ = new (require('./ast/LeftHandSideExpression').MemberExpressionNode)($1, $3, false, { loc: this._$, yy });
    `,
    '$$ = $1',
    '$$ = $1',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').NewExpressionNode)($2, $3, { loc: this._$, yy })',
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
