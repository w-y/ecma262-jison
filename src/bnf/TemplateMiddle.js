module.exports = {
  conditions: [''],
  name: 'TemplateMiddle',
  rules: [
    'RIGHT_TEMPLATE_BRACE $ LEFT_TEMPLATE_BRACE',
    'RIGHT_TEMPLATE_BRACE TemplateCharacters $ LEFT_TEMPLATE_BRACE',
  ],
  handlers: [
    '$$ = $1 + $2 + $3;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./TemplateCharacters'),
  ],
};
