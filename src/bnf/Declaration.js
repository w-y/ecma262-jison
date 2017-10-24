module.exports = {
  conditions: [''],
  name: 'Declaration',
  rules: [
    'HoistableDeclaration',
    'LexicalDeclaration_In',
    'ClassDeclaration',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
  ],
  subRules: [
    require('./HoistableDeclaration'),
    require('./LexicalDeclaration_In'),
    require('./ClassDeclaration'),
  ],
};
