module.exports = {
  conditions: [''],
  name: 'Block',
  rules: [
    '{ }',
    '{ StatementList }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)([], { loc: this._$, yy });',
    '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)($2, { loc: this._$, yy });',
  ],
  subRules: [
    require('./StatementList'),
  ],
};
