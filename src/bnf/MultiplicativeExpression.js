module.exports = {
  conditions: [''],
  name: 'MultiplicativeExpression',
  rules: [
    `ExponentiationExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./ExponentiationExpression'),
  ],
};
