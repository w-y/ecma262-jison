module.exports = {
  conditions: [''],
  name: 'ObjectLiteral',
  rules: [
    `BLOCK_START }`,
    `BLOCK_START PropertyDefinitionList }`,
    `BLOCK_START PropertyDefinitionList , }`,
  ],
  handlers: [
    `$$ = $1 + $2`,
    `$$ = $1 + $2 + $3`,
    `$$ = $1 + $2 + $3 + $4`,
  ],
  subRules: [
    require('./PropertyDefinitionList'),
  ],
};
