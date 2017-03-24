module.exports = {
  conditions: [''],
  name: 'BindingIdentifier',
  rules: [
    'Identifier',
  ],
  handlers: [
    '$$ = $1',
  ],
  subRules: [
    require('./Identifier'),
  ],
};
