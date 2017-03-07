const AssignmentExpression_In = {
  conditions: [''],
  name: 'AssignmentExpression_In',
  rules: [
    `ConditionalExpression_In`,
  ],
  handlers: [
    `$$ = $1`,
  ],
  subRules: [
    require('./conditionalexpression_In'),
  ],
}

module.exports = AssignmentExpression_In;
