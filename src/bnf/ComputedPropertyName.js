module.exports = {
  conditions: [''],
  name: 'ComputedPropertyName',
  rules: [
    '[ AssignmentExpression_In ]',
  ],
  handlers: [
    `
      $2.computed = true; 
      $$ = $2;
    `,
  ],
  subRules: [
    require('./AssignmentExpression_In'),
  ],
};
