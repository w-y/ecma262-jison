module.exports = {
  conditions: [''],
  name: 'TemplateCharacters',
  rules: [
    'TemplateCharacter'
    'TemplateCharacter TemplateCharacters'
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2`,
  ],
  subRules: [
  ],
};
