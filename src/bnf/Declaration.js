module.exports = {
  conditions: [''],
  name: 'Declaration',
  rules: [
    `HoistableDeclaration`,
    `LexicalDeclaration_In`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;`,
  ],
  subRules: [
    require('./HoistableDeclaration'),
    require('./LexicalDeclaration_In'),
  ],
};
