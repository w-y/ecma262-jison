module.exports = {
  conditions: [''],
  name: 'ClassDeclaration',
  rules: [
    'class BindingIdentifier ClassTail',
  ],
  handlers: [
    '$$ = $1',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./ClassTail'),
  ],
};
