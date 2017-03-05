const BitwiseANDExpression_In = require('./BitwiseANDExpression_In');

const BitwiseXORExpression_In = {
  conditions: [''],
  name: 'BitwiseXORExpression_In',
  rules: [
    `BitwiseANDExpression_In`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    BitwiseANDExpression_In, 
  ],
}

module.exports = BitwiseXORExpression_In;
