'use strict';

module.exports = {
  conditions: [''],
  name: 'Module',
  rules: ['ModuleBody'],
  handlers: ['$$ = $1;'],
  subRules: [require('./ModuleBody')]
};