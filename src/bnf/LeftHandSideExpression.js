module.exports = {
  conditions: [''],
  name: 'LeftHandSideExpression',
  rules: [
    `NewExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./NewExpression'),
  ],
};
