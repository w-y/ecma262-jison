module.exports = {
  conditions: [''],
  name: 'ConditionalExpression',
  rules: [
    'LogicalORExpression',
    'LogicalORExpression ? AssignmentExpression : AssignmentExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3 + $4 + $5;',
  ],
  subRules: [
    require('./LogicalORExpression'),
    require('./AssignmentExpression'),
  ],
};
