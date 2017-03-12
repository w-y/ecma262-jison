module.exports = {
  name: 'IfStatement_Return',
  conditions: [''],
  rules: [
    `if ( Expression_In ) Statement_Return`,
    `if ( Expression_In ) Statement_Return else Statement_Return`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3 + $4 + $5;`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7;`,
  ],
  subRules: [
    require('./Statement_Return'),
    require('./Expression_In'),
  ],
};
