module.exports = {
  conditions: [''],
  name: 'AssignmentExpression',
  rules: [
    'ConditionalExpression',
    'LeftHandSideExpression AssignmentOperator AssignmentExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./ConditionalExpression'),
    require('./LeftHandSideExpression'),
  ],
};

