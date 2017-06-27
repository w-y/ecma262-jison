module.exports = {
  conditions: [''],
  name: 'TemplateLiteral',
  rules: [
    'NoSubstitutionTemplate',
    'TemplateHead Expression_In TemplateSpans',
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
