module.exports = {
  name: 'CaseClause',
  conditions: [''],
  rules: [
    `case Expression_In : StatementList`,
    `case Expression_In :`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3 + $4`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./Expression_In'),
    require('./StatementList'),
  ],
};
