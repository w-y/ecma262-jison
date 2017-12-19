module.exports = {
  conditions: [''],
  name: 'ImportClause',
  rules: [
    'ImportedDefaultBinding',
    'NameSpaceImport',
    'NamedImports',
    'ImportedDefaultBinding , NameSpaceImport',
    'ImportedDefaultBinding , NamedImports',
  ],
  handlers: [
    `
      $$ = [new (require('./ast/Module').ImportedDefaultBindingNode)($1, { loc: this._$, yy })];
    `,
    `
      $$ = [new (require('./ast/Module').ImportNamespaceBindingNode)($1, { loc: this._$, yy })];
    `,
    `
      $$ = $1;
    `,
    `
      $$ = [
        new (require('./ast/Module').ImportedDefaultBindingNode)($1, { loc: this._$, yy }),
      ].concat([
        new (require('./ast/Module').ImportNamespaceBindingNode)($3, { loc: this._$, yy })
      ]);
    `,
    `
      $$ = [
        new (require('./ast/Module').ImportedDefaultBindingNode)($1, { loc: this._$, yy }),
      ].concat($3);
    `,
  ],
  subRules: [
    require('./ImportedDefaultBinding'),
    require('./NameSpaceImport'),
    require('./NamedImports'),
  ],
};
