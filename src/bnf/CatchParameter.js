module.exports = {
  conditions: [''],
  name: 'CatchParameter',
  rules: [
    'BindingIdentifier',
    'BindingPattern',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./BindingPattern'),
    require('./BindingPattern'),
  ],
};
