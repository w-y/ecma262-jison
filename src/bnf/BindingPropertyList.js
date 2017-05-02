module.exports = {
  conditions: [''],
  name: 'BindingPropertyList',
  rules: [
    'BindingProperty',
    'BindingPropertyList , BindingProperty',
  ],
  handlers: [
    '$$ = [$1]',
    '$$ = $1.concat([$3])',
  ],
  subRules: [
    require('./BindingPropertyList'),
    require('./BindingProperty'),
  ],
};
