module.exports = {
  conditions: [''],
  name: 'BindingPattern',
  rules: [
    `ObjectBindingPattern`,
    `ArrayBindingPattern`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1`,
  ],
  subRules: [
    require('./ObjectBindingPattern'),
    require('./ArrayBindingPattern'),
  ],
};
