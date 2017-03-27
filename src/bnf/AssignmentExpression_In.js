module.exports = {
  conditions: [''],
  name: 'AssignmentExpression_In',
  rules: [
    'ConditionalExpression_In',
    'LeftHandSideExpression AssignmentOperator AssignmentExpression_In',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./ConditionalExpression_In'),
    require('./LeftHandSideExpression'),
  ],
};

