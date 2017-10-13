module.exports = {
  conditions: [''],
  name: 'JSXIdentifier',
  rules: [
    'JSXIdentifierStart',
    'JSXIdentifier IdentifierPart',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2.value;',
  ],
  subRules: [
    require('./JSXIdentifierStart'),
    require('./IdentifierPart'),
  ],
};
