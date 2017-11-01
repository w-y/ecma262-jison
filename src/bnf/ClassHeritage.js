module.exports = {
  conditions: [''],
  name: 'ClassHeritage',
  rules: [
    'extends LeftHandSideExpression',
    'extends LeftBrace RightBrace',
  ],
  handlers: [
    '$$ = $2',
    `$$ = new (require('./ast/Literal').ObjectLiteralNode)([], { loc: require('./utils').mergeLoc($2, $3), yy })`,
  ],
  subRules: [
    require('./LeftHandSideExpression'),
  ],
};
