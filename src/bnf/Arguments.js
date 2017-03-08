module.exports = {
  conditions: [''],
  name: 'Arguments',
  rules: [
    `( )`,
    `( ArgumentList )`,
  ],
  handlers: [
    `$$ = $1 + $2`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./ArgumentList'),
  ],
};
