module.exports = {
  conditions: [''],
  name: 'ShiftExpression',
  rules: [
    'AdditiveExpression',
    'ShiftExpression ShiftOperator AdditiveExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/ShiftExpression\').ShiftExpressionNode)($2, $1, $3, { loc: this._$, yy })',
  ],
  subRules: [
    require('./AdditiveExpression'),
  ],
};
