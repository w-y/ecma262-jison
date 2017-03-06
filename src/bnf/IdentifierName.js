module.exports = {
  conditions: [''],
  name: 'IdentifierName',
  rules: [
    `IdentifierStart`,
    `IdentifierName IdentifierPart`,
  ],
  handlers: [
    `$0 = $1;`,
    `$0 = $1 + $2;`,
  ],
  subRules: [
    require('./IdentifierStart'),
    require('./IdentifierPart'),
  ],
};
