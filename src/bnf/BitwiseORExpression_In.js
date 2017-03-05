const BitwiseXORExpression_In = require('./BitwiseXORExpression_In');

const BitwiseORExpression_In = {
  conditions: [''],
  name: 'BitwiseORExpression_In',
  rules: [
    `BitwiseXORExpression_In`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    BitwiseXORExpression_In, 
  ],
}

module.exports = BitwiseORExpression_In;
