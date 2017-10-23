module.exports = {
  conditions: [''],
  name: 'JSXSpreadAttribute',
  rules: [
    '{ ... AssignmentExpression }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/JSXElement\').JSXSpreadAttributeNode)($3, { loc: this._$, yy });',
  ],
  subRules: [
    require('./AssignmentExpression'),
  ],
};
