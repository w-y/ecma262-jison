module.exports = {
  conditions: [''],
  name: 'ClassElement',
  rules: [
    'MethodDefinition',
    'static MethodDefinition',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2',
  ],
  subRules: [
    require('./MethodDefinition'),
  ],
};
