module.exports = {
  conditions: [''],
  name: 'SuperProperty',
  rules: [
    `super [ Expression_In ]`,
    `super . IdentifierName`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3 + $4`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./Expression_In'),
    require('./IdentifierName'),
  ],
};
