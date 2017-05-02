module.exports = {
  conditions: [''],
  name: 'Catch',
  rules: [
    'catch ( CatchParameter ) Block',
  ],
  handlers: [
    '$$ = new (require(\'./ast/TryStatement\').CatchNode)($3, $5)',
  ],
  subRules: [
    require('./Block'),
    require('./CatchParameter'),
  ],
};
