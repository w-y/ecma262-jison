module.exports = {
  conditions: [''],
  name: 'VariableDeclaration',
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
    require('./Initializer'),
    require('./BindingPattern'),
  ],
};
