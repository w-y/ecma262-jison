module.exports = {
  conditions: [''],
  name: 'Finally_Return',
  rules: [
    `finally Block_Return`,
  ],
  handlers: [
    `$$ = $1 + $2`,
  ],
  subRules: [
    require('./Block_Return'),
  ],
};
