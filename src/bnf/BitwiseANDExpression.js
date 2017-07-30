module.exports = {
  conditions: [''],
  name: 'BitwiseANDExpression',
  rules: [
    'EqualityExpression',
    'BitwiseANDExpression & EqualityExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = new (require(\'./ast/BitwiseExpression\').BitwiseANDExpressionNode)($2, $1, $3, { loc: this._$, yy })',
  ],
  subRules: [
    require('./EqualityExpression'),
  ],
};
