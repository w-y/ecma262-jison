module.exports = {
  conditions: [''],
  name: 'RelationalExpression',
  rules: [
    'ShiftExpression',
    'RelationalExpression RelationalOperator ShiftExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/RelationalExpression\').RelationalExpressionNode)($2, $1, $3)',
  ],
  subRules: [
    require('./ShiftExpression'),
  ],
};
