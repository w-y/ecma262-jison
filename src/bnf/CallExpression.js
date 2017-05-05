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
    '$$ = new (require(\'./ast/LeftHandSideExpression\').CallExpressionNode)($1, $2, { loc: $._this, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').CallExpressionNode)($1, [], { loc: $._this, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').CallExpressionNode)($1, [], { loc: $._this, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').MemberExpressionNode)($1, $3, { loc: $._this, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/LeftHandSideExpression\').MemberExpressionNode)($1, $3, { loc: $._this, lexer: yy.lexer })',
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
