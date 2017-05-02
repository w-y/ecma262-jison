module.exports = {
  conditions: [''],
  name: 'Catch_Return',
  rules: [
    'catch ( CatchParameter ) Block_Return',
  ],
  handlers: [
    '$$ = new (require(\'./ast/TryStatement\').CatchNode)($3, $5)',
  ],
  subRules: [
    require('./Block_Return'),
    require('./CatchParameter'),
  ],
};
