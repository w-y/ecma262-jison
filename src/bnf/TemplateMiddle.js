module.exports = {
  conditions: [''],
  name: 'TemplateMiddle',
  rules: [
    'RIGHT_TEMPLATE_BRACE LEFT_TEMPLATE_BRACE',
    'RIGHT_TEMPLATE_BRACE TemplateCharacters LEFT_TEMPLATE_BRACE',
  ],
  handlers: [
    `$$ = new (require('./ast/Literal').TemplateElementNode)('', false)`,
    `$$ = new (require('./ast/Literal').TemplateElementNode)($2, false)`,
  ],
  subRules: [
    require('./TemplateCharacters'),
  ],
};
