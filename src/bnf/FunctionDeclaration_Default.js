module.exports = {
  conditions: [''],
  name: 'FunctionDeclaration_Default',
  rules: [
    'FUNCTION BindingIdentifier ( ) { FunctionBody }',
    'FUNCTION BindingIdentifier ( ) { }',
    'FUNCTION BindingIdentifier ( FormalParameters ) { FunctionBody }',
    'FUNCTION BindingIdentifier ( FormalParameters ) { }',
    'FUNCTION ( ) { }',
    'FUNCTION ( ) { FunctionBody }',
    'FUNCTION ( FormalParameters  ) { }',
    'FUNCTION ( FormalParameters  ) { FunctionBody }',
  ],
  handlers: [
    '$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7',
    '$$ = $1 + $2 + $3 + $4 + $5 + $6',
    '$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8',
    '$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7',
    '$$ = $1 + $2 + $3 + $4 + $5',
    '$$ = $1 + $2 + $3 + $4 + $5 + $6',
    '$$ = $1 + $2 + $3 + $4 + $5 + $6',
    '$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./FunctionBody'),
    require('./FormalParameters'),
  ],
};
