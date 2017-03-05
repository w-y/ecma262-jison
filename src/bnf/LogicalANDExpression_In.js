const BitwiseORExpression_In = require('./BitwiseORExpression_In');

const LogicalANDExpression_In = {
  conditions: [''],
  name: 'LogicalANDExpression_In',
  rules: [
    `BitwiseORExpression_In`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    BitwiseORExpression_In, 
  ],
}

module.exports = LogicalANDExpression_In;
