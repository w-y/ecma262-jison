module.exports = {
  conditions: [''],
  name: 'DoubleStringCharacters',
  rules: [
    `DoubleStringCharacter`,
    `DoubleStringCharacter DoubleStringCharacters`,
    `EscapeSequenceStart EscapeSequence`,
    `EscapeSequenceStart EscapeSequence DoubleStringCharacters`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1 + $2;`,
    `$$ = $1 + $2;`,
    `$$ = $1 + $2 + $3;`,
  ],
  subRules: [
    require('./EscapeSequence'),
  ],
};
