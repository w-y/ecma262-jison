module.exports = {
  name: 'DefaultClause',
  conditions: [''],
  rules: [
    `default : StatementList`,
    `default :`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3`,
    `$$ = $1 + $2`,
  ],
  subRules: [
    require('./StatementList'),
  ],
};
