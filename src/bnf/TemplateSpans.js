module.exports = {
  conditions: [''],
  name: 'TemplateSpans',
  rules: [
    'TemplateTail',
    'TemplateMiddleList TemplateTail',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./TemplateTail'),
    require('./TemplateMiddleList'),
  ],
};
