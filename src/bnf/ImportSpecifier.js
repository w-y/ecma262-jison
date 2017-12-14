module.exports = {
  conditions: [''],
  name: 'ImportSpecifier',
  rules: [
    'ImportedBinding',
    'IdentifierName as ImportedBinding',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Module\').ImportSpecifierNode)($1, $1, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/Module\').ImportSpecifierNode)($3, $1, { loc: this._$, yy })',
  ],
  subRules: [
    require('./ImportedBinding'),
    require('./IdentifierName'),
  ],
};
