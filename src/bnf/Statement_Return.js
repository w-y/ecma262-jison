module.exports = {
  conditions: [''],
  name: 'Statement_Return',
  rules: [
    `EmptyStatement`,
  ],
  handlers: [
    `$$ = $1;`,
  ],
  subRules: [
    require('./EmptyStatement'),
  ],
};
