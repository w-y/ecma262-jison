module.exports = {
  conditions: [''],
  name: 'BitwiseXORExpression_In',
  rules: [
    'BitwiseANDExpression_In',
    'BitwiseXORExpression_In ^ BitwiseANDExpression_In',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = new (require(\'./ast/BitwiseExpression\').BitwiseXORExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./BitwiseANDExpression_In'),
  ],
};
