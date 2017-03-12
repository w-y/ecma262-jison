module.exports = {
  conditions: [''],
  name: 'Catch_Return',
  rules: [
    `catch ( CatchParameter ) Block_Return`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3 + $4 + $5`,
  ],
  subRules: [
    require('./Block_Return'),
    require('./CatchParameter'),
  ],
};
