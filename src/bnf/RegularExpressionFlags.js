module.exports = {
  conditions: [''],
  name: 'RegularExpressionFlags',
  rules: [
    'IdentifierPart',
    'RegularExpressionFlags IdentifierPart',
  ],
  handlers: [
    '$$ = $1.value;',
    '$$ = $1 + $2.value;',
  ],
  subRules: [
    require('./IdentifierPart'),
  ],
};
