module.exports = {
  conditions: [''],
  name: 'TryStatement',
  rules: [
    'try Block Catch',
    'try Block Finally',
    'try Block Catch Finally',
  ],
  handlers: [
    '$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, $3, null)',
    '$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, null, $3)',
    '$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, $3, $4)',
  ],
  subRules: [
    require('./Block'),
    require('./Catch'),
    require('./Finally'),
  ],
};
