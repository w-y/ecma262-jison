module.exports = {
  conditions: [''],
  name: 'BindingElementList',
  rules: [
    'BindingElisionElement',
    'BindingElementList , BindingElisionElement',
  ],
  handlers: [
    '$$ = [$1]',
    '$$ = $1.concat([$3])',
  ],
  subRules: [
    require('./BindingElisionElement'),
  ],
};
