module.exports = {
  conditions: [''],
  name: 'WithStatement_Return',
  rules: [
    `with ( Expression_In ) Statement_Return`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3 + $4 + $5;`,
  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement_Return'),
  ],
};
