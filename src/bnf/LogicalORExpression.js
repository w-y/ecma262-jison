module.exports = {
  conditions: [''],
  name: 'LogicalORExpression',
  rules: [
    `LogicalANDExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./LogicalANDExpression'), 
  ],
};
