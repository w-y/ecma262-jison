module.exports = {
  conditions: [''],
  name: 'ShiftExpression',
  rules: [
    `AdditiveExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./AdditiveExpression'),
  ],
};
