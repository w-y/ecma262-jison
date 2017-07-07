module.exports = {
  conditions: [''],
  name: 'TemplateTail',
  rules: [
    'RIGHT_TEMPLATE_BRACE `',
    'RIGHT_TEMPLATE_BRACE TemplateCharacters `',
  ],
  handlers: [
    `$$ = new (require('./ast/Literal').TemplateElementNode)('', true)`,
    `$$ = new (require('./ast/Literal').TemplateElementNode)($2, true)`,
  ],
  subRules: [
    require('./TemplateCharacters'),
  ],
};
