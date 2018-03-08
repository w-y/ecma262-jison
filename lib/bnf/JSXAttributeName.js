'use strict';

module.exports = {
  conditions: [''],
  name: 'JSXAttributeName',
  rules: ['JSXIdentifier'],
  handlers: ['$$ = $1;'],
  subRules: [require('./JSXIdentifier')]
};