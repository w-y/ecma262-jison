const LogicalORExpression_In = require('./LogicalORExpression_In');

const ConditionalExpression_In = {
  conditions: [''],
  name: 'ConditionalExpression_In',
  rules: [
    `LogicalORExpression_In`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    LogicalORExpression_In, 
  ],
}

module.exports = ConditionalExpression_In;
