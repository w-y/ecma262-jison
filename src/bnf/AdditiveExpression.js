module.exports = {
  conditions: [''],
  name: 'AdditiveExpression',
  rules: [
    'MultiplicativeExpression',
    'AdditiveExpression AdditiveOperator MultiplicativeExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/AdditiveExpression\').AdditiveExpressionNode)($2, $1, $3, { loc: this._$, yy })',
  ],
  subRules: [
    require('./MultiplicativeExpression'),
  ],
};
