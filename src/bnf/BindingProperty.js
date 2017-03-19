module.exports = {
  conditions: [''],
  name: 'BindingProperty',
  rules: [
    'SingleNameBinding',
    'PropertyName : BindingElement',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./SingleNameBinding'),
    require('./PropertyName'),
    require('./BindingElement'),
  ],
};
