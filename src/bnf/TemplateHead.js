module.exports = {
  conditions: [''],
  name: 'TemplateHead',
  rules: [
    '` $ LEFT_TEMPLATE_BRACE',
    '` TemplateCharacters $ LEFT_TEMPLATE_BRACE',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3 + $4;',
  ],
  subRules: [
    require('./TemplateHead'),
  ],
};
