module.exports = {
  conditions: [''],
  name: 'JSXIdentifier',
  rules: [
    'JSXIdentifierStart',
    'JSXIdentifier IdentifierPart',
    'JSXIdentifier -',
  ],
  handlers: [
    '$$ = new (require(\'./ast/JSXElement\').JSXIdentifierNode)($1, { loc: this._$, yy })',
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
    `
      $1.name += $2.toString();
      $1.range[1] = @2.range[1];
      $1.lastColumn = @2.last_column;
      $1.lastLine = @2.last_line;
      $$ = $1;
    `,
  ],
  subRules: [
    require('./JSXIdentifierStart'),
    require('./IdentifierPart'),
  ],
};
