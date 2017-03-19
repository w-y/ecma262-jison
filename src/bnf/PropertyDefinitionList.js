module.exports = {
  conditions: [''],
  name: 'PropertyDefinitionList',
  rules: [
    'PropertyDefinition',
    'PropertyDefinitionList , PropertyDefinition',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./PropertyDefinition'),
  ],
};
