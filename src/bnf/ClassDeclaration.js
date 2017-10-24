module.exports = {
  conditions: [''],
  name: 'ClassDeclaration',
  rules: [
    'CLASS BindingIdentifier ClassTail',
  ],
  handlers: [
    '$$ = $1',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./ClassTail'),
  ],
};
