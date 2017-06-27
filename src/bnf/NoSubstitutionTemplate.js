module.exports = {
  conditions: [''],
  name: 'NoSubstitutionTemplate',
  rules: [
    '` `',
    '` TemplateCharacters `',
  ],
  handlers: [
    '$$ = \'\'',
    '$$ = $2',
  ],
  subRules: [
    require('./TemplateCharacters'),
  ],
};
