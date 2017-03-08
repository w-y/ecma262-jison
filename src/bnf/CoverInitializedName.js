module.exports = {
  conditions: [''],
  name: 'CoverInitializedName',
  rules: [
    `IdentifierReference Initializer_In`,
  ],
  handlers: [
    `$$ = $1 + $2`,
  ],
  subRules: [
    require('./IdentifierReference'),
    require('./Initializer_In'),
  ],
};
