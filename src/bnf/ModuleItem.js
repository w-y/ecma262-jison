module.exports = {
  conditions: [''],
  name: 'ModuleItem',
  rules: [
    'ImportDeclaration',
    'ExportDeclaration',
    'StatementListItem',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
  ],
  subRules: [
    require('./ImportDeclaration'),
    require('./ExportDeclaration'),
    require('./StatementListItem'),
  ],
};
