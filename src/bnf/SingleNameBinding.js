module.exports = {
  conditions: [''],
  name: 'SingleNameBinding',
  rules: [
    'BindingIdentifier Initializer_In',
    'BindingIdentifier',
  ],
  handlers: [
    '$$ = $1 + $2',
    '$$ = $1',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./Initializer_In'),
  ],
};
