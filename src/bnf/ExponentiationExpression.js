module.exports = {
  conditions: [''],
  name: 'ExponentiationExpression',
  rules: [
    `UnaryExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./UnaryExpression'),
  ],
};
