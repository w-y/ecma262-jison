module.exports = {
  conditions: [''],
  name: 'BindingElement',
  rules: [
    `SingleNameBinding`,
    `BindingPattern Initializer_In`,
    `BindingPattern`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2`,
    `$$ = $1`,
  ],
  subRules: [
    require('./SingleNameBinding'),
    require('./BindingPattern'),
    require('./Initializer_In'),
  ],
};
