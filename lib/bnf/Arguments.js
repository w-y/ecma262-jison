'use strict';

module.exports = {
  conditions: [''],
  name: 'Arguments',
  rules: ['( )', '( ArgumentList )'],
  handlers: ['$$ = [];', '$$ = $2'],
  subRules: [require('./ArgumentList')]
};