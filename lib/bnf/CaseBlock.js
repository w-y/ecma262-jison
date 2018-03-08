'use strict';

module.exports = {
  name: 'CaseBlock',
  conditions: [''],
  rules: ['{ }', '{ CaseClauses }', '{ DefaultClause CaseClauses }', '{ DefaultClause }', '{ CaseClauses DefaultClause }', '{ CaseClauses DefaultClause CaseClauses }'],
  handlers: ['$$ = [];', '$$ = $2', '$$ = [$2].concat($3);', '$$ = [$2]', '$$ = $2.concat([$3])', '$$ = $2.concat([$3]).concat($4)'],
  subRules: [require('./CaseClauses'), require('./DefaultClause')]
};