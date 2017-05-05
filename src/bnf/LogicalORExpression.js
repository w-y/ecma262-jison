module.exports = {
  conditions: [''],
  name: 'LogicalORExpression',
  rules: [
    'LogicalANDExpression',
    'LogicalORExpression || LogicalANDExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/LogicalExpression\').LogicalORExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./LogicalANDExpression'),
  ],
};
