module.exports = {
  conditions: [''],
  name: 'AssignmentExpression_In',
  rules: [
    'ConditionalExpression_In',
    'LeftHandSideExpression AssignmentOperator AssignmentExpression_In',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/AssignmentExpression\').AssignmentExpressionNode)($2, $1, $3);',
  ],
  subRules: [
    require('./ConditionalExpression_In'),
    require('./LeftHandSideExpression'),
  ],
};

