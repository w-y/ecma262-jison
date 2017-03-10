module.exports = {
  conditions: [''],
  name: 'ConditionalExpression',
  rules: [
    `LogicalORExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./LogicalORExpression'), 
  ],
};
