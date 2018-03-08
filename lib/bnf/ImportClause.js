'use strict';

module.exports = {
  conditions: [''],
  name: 'ImportClause',
  rules: ['ImportedDefaultBinding', 'NameSpaceImport', 'NamedImports', 'ImportedDefaultBinding , NameSpaceImport', 'ImportedDefaultBinding , NamedImports'],
  handlers: ['\n      $$ = [new (require(\'./ast/Module\').ImportedDefaultBindingNode)($1, { loc: this._$, yy })];\n    ', '\n      $$ = [new (require(\'./ast/Module\').ImportNamespaceBindingNode)($1, { loc: this._$, yy })];\n    ', '\n      $$ = $1;\n    ', '\n      $$ = [\n        new (require(\'./ast/Module\').ImportedDefaultBindingNode)($1, { loc: this._$, yy }),\n      ].concat([\n        new (require(\'./ast/Module\').ImportNamespaceBindingNode)($3, { loc: this._$, yy })\n      ]);\n    ', '\n      $$ = [\n        new (require(\'./ast/Module\').ImportedDefaultBindingNode)($1, { loc: this._$, yy }),\n      ].concat($3);\n    '],
  subRules: [require('./ImportedDefaultBinding'), require('./NameSpaceImport'), require('./NamedImports')]
};