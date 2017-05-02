module.exports = {
  conditions: [''],
  name: 'Block_Return',
  rules: [
    '{ StatementList_Return }',
    '{ }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)($2);',
    '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)([]);',
  ],
  subRules: [
    require('./StatementList_Return'),
  ],
};
