module.exports = {
  conditions: [''],
  name: 'CallExpression',
  rules: [
    `MemberExpression Arguments`,
    `SuperCall`,
    `CallExpression Arguments`,
    `CallExpression [ Expression_In ]`,
    `CallExpression . IdentifierName`,
  ],
  handlers: [
    `$$ = $1 + $2`,
    `$$ = $1`,
    `$$ = $1 + $2`,
    `$$ = $1 + $2 + $3 + $4`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./MemberExpression'),
    require('./SuperCall'),
    require('./CallExpression'),
    require('./Arguments'),
    require('./Expression_In'),
    require('./IdentifierName'),
  ],
};
