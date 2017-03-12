module.exports = {
  conditions: [''],
  name: 'Finally',
  rules: [
    `finally Block`,
  ],
  handlers: [
    `$$ = $1 + $2`,
  ],
  subRules: [
    require('./Block'),
  ],
};
