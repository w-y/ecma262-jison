module.exports = {
  conditions: [''],
  name: 'ClassExpression',
  rules: [
    'class BindingIdentifier ClassTail',
    'class ClassTail',
  ],
  handlers: [
    `$$ = new (require('./ast/Class').ClassExpressionNode)($2, $3.body, $3.superClass, { loc: this._$, yy })`,
    `$$ = new (require('./ast/Class').ClassExpressionNode)(null, $2.body, $2.superClass, { loc: this._$, yy })`,
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./ClassTail'),
  ],
};
