module.exports = {
  conditions: [''],
  name: 'BindingRestElement',
  rules: [
    '... BindingIdentifier',
    '... BindingPattern',
  ],
  handlers: [
    '$$ = new (require(\'./ast/BindingRestElement\').BindingIdentifierNode)($2)',
    '$$ = new (require(\'./ast/BindingRestElement\').BindingPatternNode)($2)',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
  ],
};
