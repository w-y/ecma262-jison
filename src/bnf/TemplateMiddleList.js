module.exports = {
  conditions: [''],
  name: 'TemplateMiddleList',
  rules: [
    'TemplateMiddle Expression_In',
    'TemplateMiddleList TemplateMiddle Expression_In',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./TemplateMiddle'),
    require('./Expression_In'),
  ],
};
