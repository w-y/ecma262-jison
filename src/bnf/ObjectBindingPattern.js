module.exports = {
  conditions: [''],
  name: 'ObjectBindingPattern',
  rules: [
    'BRACE_START }',
    'BRACE_START BindingPropertyList }',
    'BRACE_START BindingPropertyList , }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)([], { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./BindingPropertyList'),
  ],
};
