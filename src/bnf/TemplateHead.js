module.exports = {
  conditions: [''],
  name: 'TemplateHead',
  rules: [
    '` LEFT_TEMPLATE_BRACE',
    '` TemplateCharacters LEFT_TEMPLATE_BRACE',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Literal\').TemplateElementNode)(\'\', false, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/Literal\').TemplateElementNode)($2, false, { loc: this._$, yy })',
  ],
  subRules: [
    require('./TemplateHead'),
  ],
};
