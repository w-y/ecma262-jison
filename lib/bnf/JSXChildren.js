'use strict';

module.exports = {
  conditions: [''],
  name: 'JSXChildren',
  rules: ['JSXChild', 'JSXChild JSXChildren'],
  handlers: ['$$ = [$1];', '$$ = [$1].concat($2);'],
  subRules: [require('./JSXChild')]
};