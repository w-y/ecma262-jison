module.exports = {
  conditions: [''],
  name: 'DebuggerStatement',
  rules: [
    'debugger ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/DebuggerStatementNode\'))()',
  ],
  subRules: [
  ],
};
