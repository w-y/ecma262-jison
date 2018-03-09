'use strict';

module.exports = {
  conditions: [''],
  name: 'ExportDeclaration',
  rules: ['export * FromClause ;', 'export ExportClause FromClause ;', 'export ExportClause ;', 'export VariableStatement', 'export Declaration', 'export default HoistableDeclaration_Default', 'export default ClassDeclaration_Default', 'export default AssignmentExpression_In ;'],
  handlers: ['$$ = new (require(\'./ast/Module\').ExportAllDeclarationNode)($3, null, null, { loc: this._$, yy });', '$$ = new (require(\'./ast/Module\').ExportNamedDeclarationNode)($2, $3, null, { loc: this._$, yy });', '$$ = new (require(\'./ast/Module\').ExportNamedDeclarationNode)($2, null, null, { loc: this._$, yy });', '$$ = new (require(\'./ast/Module\').ExportNamedDeclarationNode)(null, null, $2, { loc: this._$, yy });', '$$ = new (require(\'./ast/Module\').ExportNamedDeclarationNode)(null, null, $2, { loc: this._$, yy });', '$$ = new (require(\'./ast/Module\').ExportDefaultDeclarationNode)($3, { loc: this._$, yy });', '$$ = new (require(\'./ast/Module\').ExportDefaultDeclarationNode)($3, { loc: this._$, yy });', '$$ = new (require(\'./ast/Module\').ExportDefaultDeclarationNode)($3, { loc: this._$, yy });'],
  subRules: [require('./FromClause'), require('./ExportClause'), require('./VariableStatement'), require('./Declaration'), require('./HoistableDeclaration_Default'), require('./ClassDeclaration_Default')]
};