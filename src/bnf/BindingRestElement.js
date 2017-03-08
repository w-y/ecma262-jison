module.exports = {
  conditions: [''],
  name: 'BindingRestElement',
  rules: [
    `... BindingIdentifier`,
    `... BindingPattern`,
  ],
  handlers: [
    `$$ = $1 + $2`,
    `$$ = $1 + $2`,
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
  ],
};
