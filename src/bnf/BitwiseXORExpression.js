module.exports = {
  conditions: [''],
  name: 'BitwiseXORExpression',
  rules: [
    'BitwiseANDExpression',
    'BitwiseXORExpression ^ BitwiseANDExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = new (require(\'./ast/BitwiseExpression\').BitwiseXORExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./BitwiseANDExpression'),
  ],
};
