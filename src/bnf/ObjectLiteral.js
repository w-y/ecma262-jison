module.exports = {
  conditions: [''],
  name: 'ObjectLiteral',
  rules: [
    'BRACE_START }',
    'BRACE_START PropertyDefinitionList }',
    'BRACE_START PropertyDefinitionList , }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)([])',
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2)',
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2)',
  ],
  subRules: [
    require('./PropertyDefinitionList'),
  ],
};
