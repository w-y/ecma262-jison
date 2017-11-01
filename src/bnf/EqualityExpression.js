module.exports = {
  conditions: [''],
  name: 'EqualityExpression',
  rules: [
    'RelationalExpression',
    // 'EqualityExpression EqualityOperator RelationalExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = new (require(\'./ast/EqualityExpression\').EqualityExpressionNode)($2, $1, $3, { loc: this._$, yy })',
  ],
  subRules: [
    require('./RelationalExpression'),
  ],
};
