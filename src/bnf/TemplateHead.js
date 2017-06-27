module.exports = {
  conditions: [''],
  name: 'TemplateHead',
  rules: [
    '` $ LEFT_TEMPLATE_BRACE',
    '` TemplateCharacters',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./NoSubstitutionTemplate'),
    require('./TemplateHead'),
    require('./Expression_In'),
    require('./TemplateSpans'),
  ],
};
