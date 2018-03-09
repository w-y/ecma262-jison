'use strict';

module.exports = {
  conditions: [''],
  name: 'HoistableDeclaration',
  rules: ['FunctionDeclaration'],
  handlers: ['$$ = $1'],
  subRules: [require('./FunctionDeclaration')]
};