module.exports = {
  conditions: [''],
  name: 'StatementList',
  rules: [
    'StatementListItem',
    'StatementList StatementListItem',
  ],
  handlers: [
    `
      $$ = [$1];
      if ($1.type === 'ImportDeclaration' || $1.type === 'ExportDeclaration' || $1.type === 'ExportNamedDeclaration' || $1.type === 'ExportDefaultDeclaration') {
        $$.sourceType = 'module';
      } else {
        $$.sourceType = 'script';
      }
    `,
    `
      $$ = $1.concat([$2]);
      $$.sourceType = $1.sourceType;

      if ($2.type === 'ImportDeclaration' || $2.type === 'ExportDeclaration' || $2.type === 'ExportNamedDeclaration' || $1.type === 'ExportDefaultDeclaration') {
        $$.sourceType = 'module';
      }
    `,
  ],
  subRules: [
    require('./StatementListItem'),
  ],
};
