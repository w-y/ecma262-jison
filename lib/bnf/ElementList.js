'use strict';

module.exports = {
  conditions: [''],
  name: 'ElementList',
  rules: ['AssignmentExpression_In', 'Elision AssignmentExpression_In', 'SpreadElement', 'Elision SpreadElement', 'ElementList , AssignmentExpression_In', 'ElementList , Elision AssignmentExpression_In', 'ElementList , SpreadElement', 'ElementList , Elision SpreadElement'],
  handlers: ['$$ = [$1]', '$$ = $1.concat([$2])', '$$ = [$1]', '$$ = $1.concat([$2])', '$$ = $1.concat([$3])', '$$ = $1.concat($3).concat([$4])', '$$ = $1.concat([$3])', '$$ = $1.concat($3).concat([$4])'],
  subRules: [require('./Elision'), require('./AssignmentExpression_In'), require('./SpreadElement')]
};