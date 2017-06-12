module.exports = {
  conditions: [''],
  name: 'IdentifierName',
  rules: [
    'IdentifierStart',
    'IdentifierName IdentifierPart',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Identifier\').IdentifierNode)($1, { loc: this._$, yy })',
    `
      // NOTICE: adjust loc and last column
      // since identifier must in the same line
      // we don't need to modify line and first column
      // TODO: encapsulate method in Node

      $1.name += $2.value;
      $1.range[1] = $2.loc.range[1];
      $1.lastColumn = $2.loc.last_column;
      $1.lastLine = $2.loc.last_line;
      $$ = $1;
    `,
  ],
  subRules: [
    require('./IdentifierStart'),
    require('./IdentifierPart'),
  ],
};
