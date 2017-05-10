module.exports = {
  conditions: [''],
  name: 'BindingProperty',
  rules: [
    'SingleNameBinding',
    'PropertyName : BindingElement',
  ],
  handlers: [
    '$$ = $1',
    '$$ = {key:$1, value:$3}',
  ],
  subRules: [
    require('./SingleNameBinding'),
    require('./PropertyName'),
    require('./BindingElement'),
  ],
};
