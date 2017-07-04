module.exports = {
  conditions: [''],
  name: 'TemplateTail',
  rules: [
    'RIGHT_TEMPLATE_BRACE `',
    'RIGHT_TEMPLATE_BRACE TemplateCharacters `',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./TemplateCharacters'),
  ],
};
