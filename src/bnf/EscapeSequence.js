module.exports = {
  conditions: [''],
  name: 'EscapeSequence',
  rules: [
    'UnicodeEscapeSequence',
    'CharacterEscapeSequence',
  ],
  handlers: [
    '$$ = $1; console.log($1);',
    '$$ = $1; console.log($1);',
  ],
  subRules: [
    require('./UnicodeEscapeSequence'),
    require('./CharacterEscapeSequence'),
  ],
};
