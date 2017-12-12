module.exports = {
  conditions: [''],
  name: 'ImportDeclaration',
  rules: [
    'import ImportClause FromClause ;',
    'import ModuleSpecifier ;',
  ],
  handlers: [
    `$$ = new (require('./ast/Module').ImportDeclarationNode)($3, $2, { loc: this._$, yy })`,
    `$$ = new (require('./ast/Module').ImportDeclarationNode)($2, null, { loc: this._$, yy })`,
  ],
  subRules: [
    require('./ImportClause'),
    require('./FromClause'),
    require('./ModuleSpecifier'),
  ],
};
