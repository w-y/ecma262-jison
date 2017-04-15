module.exports = {
  conditions: [''],
  name: 'Block',
  rules: [
    '{ }',
    '{ StatementList }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)([]);',
    '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)($2);',
  ],
  subRules: [
    require('./StatementList'),
  ],
};
