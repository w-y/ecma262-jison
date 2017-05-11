module.exports = {
  name: 'CaseClauses_Return',
  conditions: [''],
  rules: [
    'CaseClause_Return',
    'CaseClauses_Return CaseClause_Return',
  ],
  handlers: [
    '$$ = [$1]',
    '$$ = $1.concat($2)',
  ],
  subRules: [
    require('./CaseClause_Return'),
  ],
};
