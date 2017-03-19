module.exports = {
  conditions: [''],
  name: 'CharacterEscapeSequence',
  rules: [
    'SingleEscapeCharacter',
    'NonEscapeCharacter',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
  ],
  subRules: [
  ],
};
