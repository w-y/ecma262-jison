module.exports = {
  conditions: [''],
  name: 'BlockStatement',
  rules: [
    `Block`,
  ],
  handlers: [
    `$$ = $1;`,
  ],
  subRules: [
    require('./Block'),
  ],
};
