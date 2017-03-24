
module.exports = {
  conditions: [''],
  name: 'ConditionalExpression_In',
  rules: [
    'LogicalORExpression_In',
    'LogicalORExpression_In ? AssignmentExpression_In : AssignmentExpression_In',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3 + $4 + $5;',
  ],
  subRules: [
    require('./LogicalORExpression_In'),
    require('./AssignmentExpression_In'),
  ],
};
