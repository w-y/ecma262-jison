module.exports = {
  conditions: [''],
  name: 'TemplateCharacter',
  rules: [
    'TemplateEscape EscapeSequence',
    'TemplateChar',
  ],
  handlers: [
    `$$ = $1 + $2`,
    `$$ = $1`,
  ],
  subRules: [
    require('./EscapeSequence'),
  ],
};
