module.exports = {
  conditions: [''],
  name: 'IdentifierPart',
  rules: [
    `UnicodeIDContinue`,
  ],
  handlers: [
    `$$ = $1;`,
  ],
  subRules: [
  ],
};
