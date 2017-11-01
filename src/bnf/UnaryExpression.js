module.exports = {
  conditions: [''],
  name: 'UnaryExpression',
  rules: [
    'UpdateExpression',
    // 'UnaryOperator UnaryExpression',
    // 'AdditiveOperator UnaryExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/UnaryExpression\').UnaryExpressionNode)($1, $2, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/UnaryExpression\').UnaryExpressionNode)($1, $2, { loc: this._$, yy })',
  ],
  subRules: [
    require('./UpdateExpression'),
  ],
};
