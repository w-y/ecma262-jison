module.exports = {
  conditions: [''],
  name: 'FunctionExpression',
  rules: [
    `function ( ) { }`,
    `function BindingIdentifier ( ) { }`,
    `function ( ) { FunctionBody }`,
    `function BindingIdentifier ( ) { FunctionBody }`,
    `function ( FormalParameters ) { }`,
    `function BindingIdentifier ( FormalParameters ) { }`,
    `function ( FormalParameters ) { FunctionBody }`,
    `function BindingIdentifier ( FormalParameters ) { FunctionBody }`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3 + $4 + $5`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8`,
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./FunctionBody'),
    require('./FormalParameters'),
  ],
};
