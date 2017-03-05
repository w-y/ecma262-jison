module.exports = {
  conditions: [''],
  name: 'EqualityExpression_In',
  rules: [
    `RelationalExpression_In`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./RelationalExpression_In'),
  ],
}
