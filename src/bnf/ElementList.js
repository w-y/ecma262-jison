module.exports = {
  conditions: [''],
  name: 'ElementList',
  rules: [
    'AssignmentExpression_In',
    'Elision AssignmentExpression_In',
    'ElementList , AssignmentExpression_In',
    'ElementList , Elision AssignmentExpression_In',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1 + $2',
    '$$ = $1 + $2 + $3',
    '$$ = $1 + $2 + $3 + $4',
  ],
  subRules: [
    require('./Elision'),
    require('./AssignmentExpression_In'),
  ],
};
