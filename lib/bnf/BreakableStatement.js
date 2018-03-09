'use strict';

module.exports = {
  name: 'BreakableStatement',
  conditions: [''],
  rules: ['IterationStatement', 'SwitchStatement'],
  handlers: ['$$ = $1', '$$ = $1'],
  subRules: [require('./IterationStatement'), require('./SwitchStatement')]
};