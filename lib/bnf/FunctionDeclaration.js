'use strict';

module.exports = {
  conditions: [''],
  name: 'FunctionDeclaration',
  rules: ['FUNCTION BindingIdentifier ( ) { FunctionBody }', 'FUNCTION BindingIdentifier ( ) LeftBrace RightBrace', 'FUNCTION BindingIdentifier ( FormalParameters ) { FunctionBody }', 'FUNCTION BindingIdentifier ( FormalParameters ) LeftBrace RightBrace'],
  handlers: ['$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, [], $6, { loc: this._$, yy })', '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(\n          $2,\n          [],\n          new (require(\'./ast/BlockStatement\').BlockStatementNode)(\n            [],\n            // block location\n            { loc: (require(\'./util\').mergeLoc($5, $6)), yy }\n          ),\n          { loc: this._$, yy }\n        )', '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, $4, $7, { loc: this._$, yy })', '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(\n        $2,\n        $4,\n        // block location\n        new (require(\'./ast/BlockStatement\').BlockStatementNode)(\n          [],\n          { loc: (require(\'./util\').mergeLoc($6, $7)), yy }\n        ),\n        { loc: this._$, yy })'],
  subRules: [require('./BindingIdentifier'), require('./FunctionBody'), require('./FormalParameters'), require('./LeftBrace'), require('./RightBrace')]
};