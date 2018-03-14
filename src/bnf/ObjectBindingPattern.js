module.exports = {
  conditions: [''],
  name: 'ObjectBindingPattern',
  rules: [
    'BRACE_START }',
    'BRACE_START BindingPropertyList }',
    'BRACE_START BindingPropertyList , }',
    'BRACE_START BindingPropertyList , BindingRestElement }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)([], { loc: this._$, yy })',
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/Literal\').ObjectLiteralNode)($2.concat([$4]), { loc: this._$, yy })',
  ],
  subRules: [
    require('./BindingPropertyList'),
    require('./BindingRestElement'),
  ],
};
