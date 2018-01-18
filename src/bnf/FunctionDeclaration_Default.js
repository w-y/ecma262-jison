module.exports = {
  conditions: [''],
  name: 'FunctionDeclaration_Default',
  rules: [
    'FUNCTION BindingIdentifier ( ) { FunctionBody }',
    'FUNCTION BindingIdentifier ( ) LeftBrace RightBrace',
    'FUNCTION BindingIdentifier ( FormalParameters ) { FunctionBody }',
    'FUNCTION BindingIdentifier ( FormalParameters ) LeftBrace RightBrace',
    'FUNCTION ( ) LeftBrace RightBrace',
    'FUNCTION ( ) { FunctionBody }',
    'FUNCTION ( FormalParameters ) LeftBrace RightBrace',
    'FUNCTION ( FormalParameters ) { FunctionBody }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, [], $6, { loc: this._$, yy })',
    `
      $$ = new (require('./ast/FunctionDeclaration').FunctionDeclarationNode)($2, [], 
          new (require('./ast/BlockStatement').BlockStatementNode)(
            [], 
            // block location
            { loc: (require('./util').mergeLoc($5, $6)), yy }
          ), 
          { loc: this._$, yy })
    `,
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)($2, $4, $7, { loc: this._$, yy })',
    `
      $$ = new (require('./ast/FunctionDeclaration').FunctionDeclarationNode)($2, $4, 
          new (require('./ast/BlockStatement').BlockStatementNode)(
            [], 
            // block location
            { loc: (require('./util').mergeLoc($6, $7)), yy }
          ), { loc: this._$, yy })
    `,
    `$$ = new (require('./ast/FunctionDeclaration').FunctionDeclarationNode)(null, [], 
        new (require('./ast/BlockStatement').BlockStatementNode)(
          [], 
          // block location
          { loc: (require('./util').mergeLoc($4, $5)), yy }
        ), { loc: this._$, yy })`,
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(null, [], $5, { loc: this._$, yy })',
    `$$ = new (require('./ast/FunctionDeclaration').FunctionDeclarationNode)(null, $3, 
        new (require('./ast/BlockStatement').BlockStatementNode)(
          [], 
          // block location
          { loc: (require('./util').mergeLoc($5, $6)), yy }
        ), { loc: this._$, yy })`,
    '$$ = new (require(\'./ast/FunctionDeclaration\').FunctionDeclarationNode)(null, $3, $6, { loc: this._$, yy })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./FunctionBody'),
    require('./FormalParameters'),
    require('./LeftBrace'),
    require('./RightBrace'),
  ],
};
