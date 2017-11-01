module.exports = {
  conditions: [''],
  name: 'RelationalExpression',
  rules: [
    'ShiftExpression',
    // 'RelationalExpression RelationalOperator ShiftExpression',
    // 'RelationalExpression > ShiftExpression',
    // 'RelationalExpression < ShiftExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3, { loc: this._$, yy })',
  ],
  subRules: [
    require('./ShiftExpression'),
  ],
};
