module.exports = {
  conditions: [''],
  name: 'JSXChild',
  rules: [
    'JSXText',
    'JSXElement',
    '{ AssignmentExpression }',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
    '$$ = new (require(\'./ast/JSXElement\').JSXExpressionContainerNode)($2, { loc: this._$, yy });',
  ],
  subRules: [
    require('./JSXText'),
    require('./JSXElement'),
    require('./AssignmentExpression'),
  ],
};
