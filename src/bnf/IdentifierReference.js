module.exports = {
  conditions: [''],
  name: 'IdentifierReference',
  rules: [
    `Identifier`,
  ],
  handlers: [
    `$$ = $1;`,
  ],
  subRules: [
    require('./Identifier'),
  ],
};
