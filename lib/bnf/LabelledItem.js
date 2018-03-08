'use strict';

module.exports = {
  conditions: [''],
  name: 'LabelledItem',
  rules: ['Statement', 'FunctionDeclaration'],
  handlers: ['$$ = $1;', '$$ = $1;'],
  subRules: [require('./Statement'), require('./FunctionDeclaration')]
};