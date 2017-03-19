module.exports = {
  conditions: [''],
  name: 'BindingElementList',
  rules: [
    'BindingElisionElement',
    'BindingElementList , BindingElisionElement',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./BindingElisionElement'),
  ],
};
