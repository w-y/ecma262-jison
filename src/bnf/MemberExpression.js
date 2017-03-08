module.exports = {
  conditions: [''],
  name: 'MemberExpression',
  rules: [
    `PrimaryExpression`,
    `MemberExpression [ Expression_In ]`,
    `MemberExpression . IdentifierName`,
    `SuperProperty`,
    `MetaProperty`,
    `new MemberExpression Arguments`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2 + $3 + $4`,
    `$$ = $1 + $2 + $3`,
    `$$ = $1`,
    `$$ = $1`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./PrimaryExpression'),
    require('./Expression_In'),
    require('./IdentifierName'),
    require('./SuperProperty'),
    require('./MetaProperty'),
    require('./Arguments'),
  ],
};
