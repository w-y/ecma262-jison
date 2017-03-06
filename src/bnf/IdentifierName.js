module.exports = {
  conditions: [''],
  name: 'IdentifierName',
  rules: [
    `IdentifierStart`,
    `IdentifierName IdentifierPart`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1 + $2;`,
  ],
  subRules: [
    require('./IdentifierStart'),
    require('./IdentifierPart'),
  ],
};
