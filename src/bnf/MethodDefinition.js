module.exports = {
  conditions: [''],
  name: 'MethodDefinition',
  rules: [
    'PropertyName ( StrictFormalParameters ) { FunctionBody }',
    'get PropertyName ( ) { FunctionBody }',
    'set PropertyName ( PropertySetParameterList ) { FunctionBody }',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./PropertyName'),
    require('./StrictFormalParameters'),
    require('./PropertySetParameterList'),
    require('./FunctionBody'),
  ],
};
