module.exports = {
  conditions: [''],
  name: 'IdentifierPart',
  rules: [
    `UnicodeIDContinue`,
    `UnicodeEscapeSequenceContinue`,
    `$`,
    `_`,
    `ZWNJ`,
    `ZWJ`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;`,
    `$$ = $1;`,
    `$$ = $1;`,
    `$$ = $1;`,
    `$$ = $1;`,
  ],
  subRules: [
    require('./UnicodeEscapeSequenceContinue'),
  ],
};
