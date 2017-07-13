module.exports = {
  conditions: [''],
  name: 'PrimaryExpression',
  rules: [
    'this',
    'IdentifierReference',
    'Literal',
    'ArrayLiteral',
    'ObjectLiteral',
    'CoverParenthesizedExpressionAndArrowParameterList',
    'FunctionExpression',
    'TemplateLiteral',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ThisExpressionNode\'))({ loc: this._$, yy });',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
  ],
  subRules: [
    require('./IdentifierReference'),
    require('./Literal'),
    require('./ArrayLiteral'),
    require('./ObjectLiteral'),
    require('./CoverParenthesizedExpressionAndArrowParameterList'),
    require('./FunctionExpression'),
    require('./TemplateLiteral'),
  ],
};
