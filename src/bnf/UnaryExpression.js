module.exports = {
  conditions: [''],
  name: 'UnaryExpression',
  rules: [
    'UpdateExpression',
    'UnaryOperator UnaryExpression',
    'AdditiveOperator UnaryExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/UnaryExpression\').UnaryExpressionNode)($1, $2, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/UnaryExpression\').UnaryExpressionNode)($1, $2, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./UpdateExpression'),
  ],
};
