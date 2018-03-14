module.exports = {
  conditions: [''],
  name: 'PropertyDefinition',
  rules: [
    'IdentifierReference',
    'CoverInitializedName',
    'PropertyName : AssignmentExpression_In',
    '... AssignmentExpression_In',
  ],
  handlers: [
    '$$ = {key:$1, value:$1}',
    '$$ = $1',
    '$$ = {key:$1, value:$3}',
    '$$ = new (require(\'./ast/SpreadPropertyNode\'))($2, { loc: this._$, yy })',
  ],
  subRules: [
    require('./IdentifierReference'),
    require('./CoverInitializedName'),
    require('./AssignmentExpression_In'),
    require('./PropertyName'),
    require('./AssignmentExpression_In'),
  ],
};
