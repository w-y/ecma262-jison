module.exports = {
  conditions: [''],
  name: 'BindingPropertyList',
  rules: [
    'BindingProperty',
    'BindingPropertyList , BindingProperty',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./BindingPropertyList'),
    require('./BindingProperty'),
  ],
};
