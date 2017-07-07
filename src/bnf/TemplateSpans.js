module.exports = {
  conditions: [''],
  name: 'TemplateSpans',
  rules: [
    'TemplateTail',
    'TemplateMiddleList TemplateTail',
  ],
  handlers: [
    `$$ = { quasis: [$1], expressions: [] }`,
    `$$ = { quasis: $1.quasis.concat([$2]), expressions: $1.expressions }`,
  ],
  subRules: [
    require('./TemplateTail'),
    require('./TemplateMiddleList'),
  ],
};
