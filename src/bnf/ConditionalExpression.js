module.exports = {
  conditions: [''],
  name: 'ConditionalExpression',
  rules: [
    'LogicalORExpression',
    'LogicalORExpression ? AssignmentExpression : AssignmentExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = new (require(\'./ast/ConditionalExpression\').ConditionalExpressionNode)($1, $3, $5, { loc: this._$, yy });',
  ],
  subRules: [
    require('./LogicalORExpression'),
    require('./AssignmentExpression'),
  ],
};
