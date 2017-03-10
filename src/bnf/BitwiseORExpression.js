module.exports = {
  conditions: [''],
  name: 'BitwiseORExpression',
  rules: [
    `BitwiseXORExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./BitwiseXORExpression'), 
  ],
};
