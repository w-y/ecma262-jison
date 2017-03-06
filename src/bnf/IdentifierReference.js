module.exports = {
  conditions: [''],
  name: 'IdentifierReference',
  rules: [
    `Identifier`,
  ],
  handlers: [
    `$0 = $1;`,
  ],
  subRules: [
    require('./Identifier'),
  ],
};
