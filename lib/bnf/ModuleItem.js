'use strict';

module.exports = {
  conditions: [''],
  name: 'ModuleItem',
  rules: ['ImportDeclaration', 'ExportDeclaration'],
  handlers: ['$$ = $1;', '$$ = $1;'],
  subRules: [require('./ImportDeclaration'), require('./ExportDeclaration')]
};