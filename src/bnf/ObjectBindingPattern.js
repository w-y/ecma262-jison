module.exports = {
  conditions: [''],
  name: 'ObjectBindingPattern',
  rules: [
    'BRACE_START }',
    'BRACE_START BindingPropertyList }',
    'BRACE_START BindingPropertyList , }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)([])',
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2)',
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2)',
  ],
  subRules: [
    require('./BindingPropertyList'),
  ],
};
