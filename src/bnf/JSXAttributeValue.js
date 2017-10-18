module.exports = {
  conditions: [''],
  name: 'JSXAttributeValue',
  rules: [
    'JSXSingleQuoteStart JSXSingleStringCharacters JSXSingleQuoteEnd',
    'JSXDoubleQuoteStart JSXDoubleStringCharacters JSXDoubleQuoteEnd',
    '{ AssignmentExpression }',
    'JSXElement',
  ],
  handlers: [
    `$$ = new (require('./ast/Literal').StringLiteralNode)($1 + $2 + $3, { raw: $1, loc: this._$, yy });`,
    `$$ = new (require('./ast/Literal').StringLiteralNode)($1 + $2 + $3, { raw: $1, loc: this._$, yy });`,
    '$$ = $2;',
    '$$ = $1;',
  ],
  subRules: [
    require('./JSXAttributeValue'),
    require('./AssignmentExpression'),
    require('./JSXSingleStringCharacters'),
    require('./JSXDoubleStringCharacters'),
  ],
};
