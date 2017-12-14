module.exports = {
  conditions: [''],
  name: 'ExportSpecifier',
  rules: [
    'IdentifierName',
    'IdentifierName as IdentifierName',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Module\').ExportSpecifierNode)($1, $1, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/Module\').ExportSpecifierNode)($3, $1, { loc: this._$, yy })',
  ],
  subRules: [
    require('./IdentifierName'),
  ],
};
