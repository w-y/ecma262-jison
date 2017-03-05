module.exports = {
  conditions: [''],
  name: 'UnaryExpression',
  rules: [
    `UpdateExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./UpdateExpression'),
  ],
};
