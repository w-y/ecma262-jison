module.exports = {
  conditions: [''],
  name: 'SingleStringCharacters',
  rules: [
    'SingleStringCharacter',
    'SingleStringCharacter SingleStringCharacters',
    'EscapeSequenceStart EscapeSequence',
    'EscapeSequenceStart EscapeSequence SingleStringCharacters',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2;',
    '$$ = $2;',
    '$$ = $2 + $3;',
  ],
  subRules: [
    require('./EscapeSequence'),
  ],
};
