'use strict';

module.exports = {
  conditions: [''],
  name: 'StatementListItem',
  rules: ['Statement', 'Declaration', 'ImportDeclaration', 'ExportDeclaration'],
  handlers: ['$$ = $1;', '$$ = $1', '$$ = $1', '$$ = $1'],
  subRules: [require('./Statement'), require('./Declaration'), require('./ImportDeclaration'), require('./ExportDeclaration')]
};