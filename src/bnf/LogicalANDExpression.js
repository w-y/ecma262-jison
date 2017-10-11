module.exports = {
  conditions: [''],
  name: 'LogicalANDExpression',
  rules: [
    'BitwiseORExpression',
    //'LogicalANDExpression && BitwiseORExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/LogicalExpression\').LogicalANDExpressionNode)($2, $1, $3, { loc: this._$, yy })',
  ],
  subRules: [
    require('./BitwiseORExpression'),
  ],
};
