module.exports = {
  conditions: [''],
  name: 'ForBinding',
  rules: [
    'BindingIdentifier',
    'BindingPattern',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
  ],
};
