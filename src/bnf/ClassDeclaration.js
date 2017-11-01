module.exports = {
  conditions: [''],
  name: 'ClassDeclaration',
  rules: [
    'CLASS BindingIdentifier ClassTail',
  ],
  handlers: [
    `$$ = new (require('./ast/Class').ClassDeclarationNode)($2, $3.body, $3.superClass, { loc: this._$, yy })`,
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./ClassTail'),
  ],
};
