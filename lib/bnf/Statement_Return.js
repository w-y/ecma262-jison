'use strict';

module.exports = {
  conditions: [''],
  name: 'Statement_Return',
  rules: ['EmptyStatement', 'ExpressionStatement', 'VariableStatement', 'BlockStatement_Return', 'LabelledStatement', 'IfStatement_Return', 'BreakableStatement_Return', 'ContinueStatement', 'BreakStatement', 'WithStatement_Return', 'ThrowStatement', 'DebuggerStatement', 'TryStatement_Return', 'ReturnStatement'],
  handlers: ['$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;', '$$ = $1;'],
  subRules: [require('./EmptyStatement'), require('./ExpressionStatement'), require('./VariableStatement'), require('./BlockStatement_Return'), require('./LabelledStatement'), require('./IfStatement_Return'), require('./BreakableStatement_Return'), require('./ContinueStatement'), require('./BreakStatement'), require('./WithStatement_Return'), require('./ThrowStatement'), require('./DebuggerStatement'), require('./TryStatement_Return'), require('./ReturnStatement')]
};