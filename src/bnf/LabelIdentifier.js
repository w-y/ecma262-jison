module.exports = {
  conditions: [''],
  name: 'LabelIdentifier',
  rules: [
    `Identifier`,
  ],
  handlers: [
    `$$ = $1;`
  ],
  subRules: [
    require('./Identifier'),
  ],
};
