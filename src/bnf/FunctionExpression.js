module.exports = {
  conditions: [''],
  name: 'FunctionExpression',
  rules: [
    'function ( ) { }',
    'function BindingIdentifier ( ) { }',
    'function ( ) { FunctionBody }',
    'function BindingIdentifier ( ) { FunctionBody }',

    'function ( FormalParameters ) { }',
    'function BindingIdentifier ( FormalParameters ) { }',
    'function ( FormalParameters ) { FunctionBody }',
    'function BindingIdentifier ( FormalParameters ) { FunctionBody }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)(null, [], null)',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)($2, [], null)',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)(null, [], $5)',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)($2, [], $6)',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)(null, $3, null)',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)($2, $4, null)',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)(null, $3, $6)',
    '$$ = new (require(\'./ast/FunctionExpression\').FunctionExpressionNode)($2, $4, $7)',
  ],
  subRules: [
    require('./BindingIdentifier'),
    require('./FunctionBody'),
    require('./FormalParameters'),
  ],
};
