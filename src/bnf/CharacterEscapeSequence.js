module.exports = {
  conditions: [''],
  name: 'CharacterEscapeSequence',
  rules: [
    'SingleEscapeCharacter',
    'NonEscapeCharacter',
  ],
  handlers: [
    '$$ = require(\'./constants\').STRING_SINGLE_CHARACTER_ESCAPE_SEQUENCES($1);',
    '$$ = $1;',
  ],
  subRules: [
  ],
};
