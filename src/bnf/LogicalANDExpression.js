module.exports = {
  conditions: [''],
  name: 'LogicalANDExpression',
  rules: [
    `BitwiseORExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./BitwiseORExpression'),
  ],
};
