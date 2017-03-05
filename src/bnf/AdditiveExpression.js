module.exports = {
  conditions: [''],
  name: 'AdditiveExpression',
  rules: [
    `MultiplicativeExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./MultiplicativeExpression'),
  ],
};
