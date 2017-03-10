module.exports = {
  conditions: [''],
  name: 'LexicalBinding',
  rules: [
    `BindingIdentifier`,
    `BindingIdentifier Initializer`,
    `BindingPattern Initializer`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2`,
    `$$ = $1 + $2`,
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./BindingPattern'),
    require('./Initializer'),
  ],
};
