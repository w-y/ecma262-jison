module.exports = {
  conditions: [''],
  name: 'PropertyDefinition',
  rules: [
    `IdentifierReference`,
    `CoverInitializedName`,
    `PropertyName : AssignmentExpression_In`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./IdentifierReference'),
    require('./CoverInitializedName'),
    require('./AssignmentExpression_In'),
    require('./PropertyName'),
  ],
};
