module.exports = {
  conditions: [''],
  name: 'JSXIdentifier',
  rules: [
    'IdentifierStart',
    'JSXIdentifier IdentifierPart',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2.value;',
  ],
  subRules: [
    require('./IdentifierStart'),
    require('./IdentifierPart'),
  ],
};
