module.exports = {
  conditions: [''],
  name: 'CallExpression',
  rules: [
    'MemberExpression Arguments',
    'SuperCall',
    'CallExpression Arguments',
    'CallExpression [ Expression_In ]',
    'CallExpression . IdentifierName',
  ],
  handlers: [
    '$$ = new (require(\'./ast/LeftHandSideExpression\').CallExpressionNode)($1, $2, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').CallExpressionNode)($1, [], { loc: this._$, yy })',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').CallExpressionNode)($1, [], { loc: this._$, yy })',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').MemberExpressionNode)($1, $3, true, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').MemberExpressionNode)($1, $3, false, { loc: this._$, yy })',
  ],
  subRules: [
    require('./MemberExpression'),
    require('./SuperCall'),
    require('./CallExpression'),
    require('./Arguments'),
    require('./Expression_In'),
    require('./IdentifierName'),
  ],
};
