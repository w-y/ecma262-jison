module.exports = {
  conditions: [''],
  name: 'ArgumentList',
  rules: [
    `AssignmentExpression_In`,
    `... AssignmentExpression_In`,
    `ArgumentList , AssignmentExpression_In`,
    `ArgumentList , ... AssignmentExpression_In`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2`,
    `$$ = $1 + $2 + $3`,
    `$$ = $1 + $2 + $3 + $4`,
  ],
  subRules: [
    require('./AssignmentExpression_In'),
  ],
};
