module.exports = {
  conditions: [''],
  name: 'WithStatement',
  rules: [
    `with ( Expression_In ) Statement`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3 + $4 + $5;`,
  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement'),
  ],
};
