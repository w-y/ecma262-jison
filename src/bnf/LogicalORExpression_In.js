module.exports = {
  conditions: [''],
  name: 'LogicalORExpression_In',
  rules: [
    'LogicalANDExpression_In',
    'LogicalORExpression_In || LogicalANDExpression_In',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/LogicalExpression\').LogicalORExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./LogicalANDExpression_In'),
  ],
};
