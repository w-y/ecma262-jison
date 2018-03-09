'use strict';

module.exports = {
  conditions: [''],
  name: 'ClassElement',
  rules: ['MethodDefinition', 'static MethodDefinition', ';'],
  handlers: ['\n      $1.static = false;\n      $$ = $1;\n    ', '\n      $2.static = true;\n      $$ = $2;\n    ', '\n      $$ = [];\n    '],
  subRules: [require('./MethodDefinition')]
};