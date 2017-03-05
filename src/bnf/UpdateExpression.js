module.exports = {
  conditions: [''],
  name: 'UpdateExpression',
  rules: [
    `LeftHandSideExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./LeftHandSideExpression'),
  ],
};
