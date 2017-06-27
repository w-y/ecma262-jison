module.exports = {
  conditions: [''],
  name: 'ConciseBody_In',
  rules: [
    'AssignmentExpression_In',
    'LEFT_ARROW_BRACE }',
    'LEFT_ARROW_BRACE FunctionBody }',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)([], { yy, loc: this._$ })',
    '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)($2, { yy, loc: this._$ })',
  ],
  subRules: [
    require('./AssignmentExpression_In'),
    require('./FunctionBody'),
  ],
};
