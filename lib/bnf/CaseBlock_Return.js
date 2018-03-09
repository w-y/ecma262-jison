'use strict';

module.exports = {
  name: 'CaseBlock_Return',
  conditions: [''],
  rules: ['{ }', '{ CaseClauses_Return }', '{ DefaultClause_Return CaseClauses_Return }', '{ DefaultClause_Return }', '{ CaseClauses_Return DefaultClause_Return }', '{ CaseClauses_Return DefaultClause_Return CaseClauses_Return }'],
  handlers: ['$$ = [];', '$$ = $2', '$$ = [$2].concat($3);', '$$ = [$2]', '$$ = $2.concat([$3])', '$$ = $2.concat([$3]).concat($4)'],
  subRules: [require('./CaseClauses_Return'), require('./DefaultClause_Return')]
};