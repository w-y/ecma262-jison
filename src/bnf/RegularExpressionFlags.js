module.exports = {
  conditions: [''],
  name: 'RegularExpressionFlags',
  rules: [
    'IdentifierPart',
    'RegularExpressionFlags IdentifierPart',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./IdentifierPart'),
  ],
};
