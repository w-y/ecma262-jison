module.exports = {
  conditions: [''],
  name: 'TemplateHead',
  rules: [
    '` LEFT_TEMPLATE_BRACE',
    '` TemplateCharacters LEFT_TEMPLATE_BRACE',
  ],
  handlers: [
    `$$ = new (require('./ast/Literal').TemplateElementNode)('', false)`,
    `$$ = new (require('./ast/Literal').TemplateElementNode)($2, false)`,
  ],
  subRules: [
    require('./TemplateHead'),
  ],
};
