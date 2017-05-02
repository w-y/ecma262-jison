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
    '$$ = new (require(\'./ast/UnaryExpression\').UnaryExpressionNode)($1, $2)',
    '$$ = new (require(\'./ast/UnaryExpression\').UnaryExpressionNode)($1, $2)',
  ],
  subRules: [
    require('./UpdateExpression'),
  ],
};
