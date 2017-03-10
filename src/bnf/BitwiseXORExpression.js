module.exports = {
  conditions: [''],
  name: 'BitwiseXORExpression',
  rules: [
    `BitwiseANDExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./BitwiseANDExpression'),
  ],
};
