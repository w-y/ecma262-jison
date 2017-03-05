module.exports = {
  conditions: [''],
  name: 'BitwiseANDExpression_In',
  rules: [
    `EqualityExpression_In`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./EqualityExpression_In'),
  ],
}
