module.exports = {
  conditions: [''],
  name: 'JSXMemberExpression',
  rules: [
    'JSXIdentifier . JSXIdentifier',
    'JSXMemberExpression . JSXIdentifier',
  ],
  handlers: [
    `$$ = new (require('./ast/JSXElement').JSXMemberExpressionNode)($1, $2, { loc: this._$, yy });`,
    `$$ = new (require('./ast/JSXElement').JSXMemberExpressionNode)($1, $2, { loc: this._$, yy });`,
  ],
  subRules: [
    require('./JSXIdentifier'),
  ],
};
