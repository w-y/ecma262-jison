module.exports = {
  conditions: [''],
  name: 'SuperProperty',
  rules: [
    'super [ Expression_In ]',
    'super . IdentifierName',
  ],
  handlers: [
    `$$ =
      new (require('./ast/LeftHandSideExpression').MemberExpressionNode)(new (require('./ast/SuperNode')($1)), $3, { loc: this._$, yy })
    `,
    `$$ =
      new (require('./ast/LeftHandSideExpression').MemberExpressionNode)(new (require('./ast/SuperNode')($1)), $3, { loc: this._$, yy })
    `,
  ],
  subRules: [
    require('./Expression_In'),
    require('./IdentifierName'),
  ],
};
