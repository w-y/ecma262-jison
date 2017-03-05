const LogicalANDExpression_In = require('./LogicalANDExpression_In');

const LogicalORExpression_In = {
  conditions: [''],
  name: 'LogicalORExpression_In',
  rules: [
    `LogicalANDExpression_In`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    LogicalANDExpression_In, 
  ],
}

module.exports = LogicalORExpression_In;
