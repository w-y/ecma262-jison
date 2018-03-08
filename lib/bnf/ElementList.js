'use strict';

module.exports = {
  conditions: [''],
  name: 'ElementList',
  rules: ['AssignmentExpression_In', 'Elision AssignmentExpression_In', 'ElementList , AssignmentExpression_In', 'ElementList , Elision AssignmentExpression_In'],
  handlers: ['$$ = [$1]', '$$ = $1.concat([$2])', '$$ = $1.concat([$3])', '$$ = $1.concat($3).concat([$4])'],
  subRules: [require('./Elision'), require('./AssignmentExpression_In')]
};