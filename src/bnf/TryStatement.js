module.exports = {
  conditions: [''],
  name: 'TryStatement',
  rules: [
    `try Block Catch`,
    `try Block Finally`,
    `try Block Catch Finally`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3`,
    `$$ = $1 + $2 + $3`,
    `$$ = $1 + $2 + $3 + $4`,
  ],
  subRules: [
    require('./Block'),
    require('./Catch'),
    require('./Finally'),
  ],
};
