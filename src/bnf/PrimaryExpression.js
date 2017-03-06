module.exports = {
  conditions: [''],
  name: 'PrimaryExpression',
  rules: [
    `this`,
    `IdentifierReference`,
    `Literal`,
  ],
  handlers: [
    `console.log('primary expression ' + $1);`,
    `console.log('primary expression ' + $1);`,
    `console.log('primary expression ' + $1);`,
  ],
  subRules: [
    require('./IdentifierReference'),
    require('./Literal'),
  ],
};
