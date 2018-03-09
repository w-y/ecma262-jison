'use strict';

module.exports = {
  conditions: [''],
  name: 'ExportClause',
  rules: ['{ }', '{ ExportsList }', '{ ExportsList , }'],
  handlers: ['$$ = [];', '$$ = $2;', '$$ = $2;'],
  subRules: [require('./ExportsList')]
};