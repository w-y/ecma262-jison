module.exports = {
  conditions: [''],
  name: 'ClassHeritage',
  rules: [
    'extends LeftHandSideExpression',
  ],
  handlers: [
    '$$ = $1',
  ],
  subRules: [
    require('./LeftHandSideExpression'),
  ],
};
