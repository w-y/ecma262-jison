module.exports = {
  conditions: [''],
  name: 'ExponentiationExpression',
  rules: [
    'UnaryExpression',
    'UpdateExpression ** ExponentiationExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = new (require(\'./ast/ExponentiationExpression\').ExponentiationExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./UnaryExpression'),
    require('./UpdateExpression'),
  ],
};
