module.exports = {
  conditions: [''],
  name: 'PrimaryExpression',
  rules: [
    `this`,
  ],
  handlers: [
    `console.log('primary expression ' + $1);`,
  ],
  subRules: [
  ],
};
