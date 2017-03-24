module.exports = {
  name: 'CaseBlock',
  conditions: [''],
  rules: [
    '{ }',
    '{ CaseClauses }',
    '{ DefaultClause CaseClauses }',
    '{ DefaultClause }',
    '{ CaseClauses DefaultClause }',
    '{ CaseClauses DefaultClause CaseClauses }',
  ],
  handlers: [
    '$$ = $1 + $2',
    '$$ = $1 + $2 + $3',
    '$$ = $1 + $2 + $3 + $4',
    '$$ = $1 + $2 + $3',
    '$$ = $1 + $2 + $3 + $4',
    '$$ = $1 + $2 + $3 + $4 + $5',
  ],
  subRules: [
    require('./CaseClauses'),
    require('./DefaultClause'),
  ],
};
