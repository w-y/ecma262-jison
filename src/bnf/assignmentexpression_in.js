const ConditionalExpression_In = require('./conditionalexpression_In');

const AssignmentExpression_In = {
  conditions: [''],
  name: 'AssignmentExpression_In',
  rules: [
    `ConditionalExpression_In`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    ConditionalExpression_In,
  ],
}

module.exports = AssignmentExpression_In;
