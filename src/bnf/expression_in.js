const AssignmentExpression_In = require('./assignmentexpression_in');

const Expression_In = {
  conditions: [''],
  name: 'Expression_In',
  rules: [
    `AssignmentExpression_In`,
    `Expression_In ',' AssignmentExpression_In`,
  ],
  handlers: [
    `;`,
    `;`,
  ],
  subRules: [
    AssignmentExpression_In,
  ],
}

module.exports = Expression_In;
