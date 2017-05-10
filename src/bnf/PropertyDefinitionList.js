module.exports = {
  conditions: [''],
  name: 'PropertyDefinitionList',
  rules: [
    'PropertyDefinition',
    'PropertyDefinitionList , PropertyDefinition',
  ],
  handlers: [
    '$$ = [$1]',
    '$$ = $1.concat([$3])',
  ],
  subRules: [
    require('./PropertyDefinition'),
  ],
};
