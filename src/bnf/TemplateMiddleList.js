module.exports = {
  conditions: [''],
  name: 'TemplateMiddleList',
  rules: [
    'TemplateMiddle Expression_In',
    'TemplateMiddleList TemplateMiddle Expression_In',
  ],
  handlers: [
    `$$ = { quasis: [$1], expressions: [$2] }`,
    `$$ = { quasis: $1.quasis.concat([$2]), expressions: $1.expressions.concat([$3]) }`,
  ],
  subRules: [
    require('./TemplateMiddle'),
    require('./Expression_In'),
  ],
};
