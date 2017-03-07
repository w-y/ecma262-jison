module.exports = {
  conditions: [''],
  name: 'PrimaryExpression',
  rules: [
    `this`,
    `IdentifierReference`,
    `Literal`,
    `ArrayLiteral`,
  ],
  handlers: [
    `console.log('primary expression ' + $1);`,
    `console.log('primary expression (identifierReference):' + $1);`,
    `console.log('primary expression (literal):' + $1);`,
    `console.log('primary expression (array literal):' + $1);`,
  ],
  subRules: [
    require('./IdentifierReference'),
    require('./Literal'),
    require('./ArrayLiteral'),
  ],
};
