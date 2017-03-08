module.exports = {
  conditions: [''],
  name: 'LexicalBinding_In',
  rules: [
    `BindingIdentifier`,
    `BindingIdentifier Initializer_In`,
    `BindingPattern Initializer_In`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2`,
    `$$ = $1 + $2`,
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
    require('./Initializer_In'),
  ],
};
