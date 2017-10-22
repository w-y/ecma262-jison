module.exports = {
  conditions: [''],
  name: 'RelationalExpression_In',
  rules: [
    'ShiftExpression',
    'RelationalExpression_In RelationalOperator ShiftExpression',
    'RelationalExpression_In in ShiftExpression',
    'RelationalExpression_In instanceof ShiftExpression',
    'RelationalExpression_In < ShiftExpression',
    'RelationalExpression_In > ShiftExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3, { loc: this._$, yy })',
  ],
  subRules: [
    require('./ShiftExpression'),
  ],
};
