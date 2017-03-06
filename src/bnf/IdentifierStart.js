module.exports = {
  conditions: [''],
  name: 'IdentifierStart',
  rules: [
    `UnicodeIDStart`,
    `UnicodeEscapeSequence`,
    `$`,
    `_`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;`, // TODO: unicode with id start
    `$$ = $1;`,
    `$$ = $1;`,
  ],
  subRules: [
    require('./UnicodeEscapeSequence'),
  ],
};
