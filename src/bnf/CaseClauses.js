module.exports = {
  name: 'CaseClauses',
  conditions: [''],
  rules: [
    'CaseClause',
    'CaseClauses CaseClause',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2',
  ],
  subRules: [
    require('./CaseClause'),
  ],
};
