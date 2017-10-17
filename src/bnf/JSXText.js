module.exports = {
  conditions: [''],
  name: 'JSXText',
  rules: [
    'JSXTextCharacters',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Literal\').StringLiteralNode)($1, { raw: $1, loc: this._$, yy });',
  ],
  subRules: [
  ],
};
