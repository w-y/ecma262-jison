'use strict';

module.exports = {
  conditions: [''],
  name: 'IdentifierName',
  rules: ['IdentifierStart', 'IdentifierName IdentifierPart'],
  handlers: ['$$ = new (require(\'./ast/Identifier\').IdentifierNode)($1, { loc: this._$, yy })', '\n      // NOTICE: adjust loc and last column\n      // since identifier must in the same line\n      // we don\'t need to modify line and first column\n      // TODO: encapsulate method in Node\n\n      $1.name += $2.value;\n      $1.range[1] = $2.loc.range[1];\n      $1.lastColumn = $2.loc.last_column;\n      $1.lastLine = $2.loc.last_line;\n      $$ = $1;\n    '],
  subRules: [require('./IdentifierStart'), require('./IdentifierPart')]
};