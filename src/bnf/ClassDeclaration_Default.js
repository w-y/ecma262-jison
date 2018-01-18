module.exports = {
  conditions: [''],
  name: 'ClassDeclaration_Default',
  rules: [
    'CLASS BindingIdentifier ClassTail',
    'CLASS ClassTail',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Class\').ClassDeclarationNode)($2, $3.body, $3.superClass, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/Class\').ClassDeclarationNode)(null, $2.body, $2.superClass, { loc: this._$, yy })',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./ClassTail'),
  ],
};
