module.exports = {
  conditions: [''],
  name: 'TemplateTail',
  rules: [
    '}',
    '} TemplateCharacters',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./TemplateCharacters'),
  ],
};
