module.exports = {
  conditions: [''],
  name: 'IdentifierStart',
  rules: [
    `UnicodeIDStart`,
    `UnicodeEscapeSequence`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;`, // TODO: unicode with id start
  ],
  subRules: [
    require('./UnicodeEscapeSequence'),
  ],
};
