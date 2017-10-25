module.exports = {
  conditions: [''],
  name: 'ClassExpression',
  rules: [
    'class BindingIdentifier ClassTail',
    'class ClassTail',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./ClassTail'),
  ],
};
