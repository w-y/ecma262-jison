module.exports = {
  name: 'IterationStatement',
  conditions: [''],
  rules: [
    'do Statement while ( Expression_In ) ;',
    'while ( Expression_In ) Statement',

    'for ( LexicalDeclaration Expression_In ; Expression_In ) Statement',
    'for ( var VariableDeclarationList ; Expression_In ; Expression_In ) Statement',

    'for ( LeftHandSideExpression in Expression_In ) Statement',
    'for ( ForDeclaration in Expression_In ) Statement',

    'for ( LeftHandSideExpression of AssignmentExpression_In ) Statement',
    'for ( var ForBinding of AssignmentExpression_In ) Statement',
    'for ( ForDeclaration of AssignmentExpression_In ) Statement',

    'for ( Expression ; Expression_In ; Expression_In ) Statement',
    'for ( Expression ; ; Expression_In ) Statement',
    'for ( Expression ; ; ) Statement',
    'for ( Expression ; Expression_In ; ) Statement',

    'for ( ; Expression_In ; Expression_In ) Statement',
    'for ( ; ; Expression_In ) Statement',
    'for ( ; ; ) Statement',
    'for ( ; Expression_In ; ) Statement',
  ],
  handlers: [
    '$$ = new (require(\'./ast/IterationStatement\').DoWhileStatementNode)($5, $2)',
    '$$ = new (require(\'./ast/IterationStatement\').WhileStatementNode)($3, $5)',

    '$$ = new (require(\'./ast/IterationStatement\').ForStatementNode)($3, $4, $6, $8)',
    '$$ = new (require(\'./ast/IterationStatement\').ForStatementNode)($4, $6, $8, $10)',

    '$$ = new (require(\'./ast/IterationStatement\').ForInStatementNode)($3, $5, $7)',
    '$$ = new (require(\'./ast/IterationStatement\').ForInStatementNode)($3, $5, $7)',

    '$$ = new (require(\'./ast/IterationStatement\').ForOfStatementNode)($3, $5, $7)',
    '$$ = new (require(\'./ast/IterationStatement\').ForOfStatementNode)($4, $6, $8)',
    '$$ = new (require(\'./ast/IterationStatement\').ForOfStatementNode)($3, $5, $7)',

    '$$ = new (require(\'./ast/IterationStatement\').ForStatementNode)($3, $5, $7, $9)',
    '$$ = new (require(\'./ast/IterationStatement\').ForStatementNode)($3, null, $6, $7)',
    '$$ = new (require(\'./ast/IterationStatement\').ForStatementNode)($3, null, null, $7)',
    '$$ = new (require(\'./ast/IterationStatement\').ForStatementNode)($3, $5, null, $8)',

    '$$ = new (require(\'./ast/IterationStatement\').ForStatementNode)(null, $4, $6, $8)',
    '$$ = new (require(\'./ast/IterationStatement\').ForStatementNode)(null, null, $5, $7)',
    '$$ = new (require(\'./ast/IterationStatement\').ForStatementNode)(null, null, null, $6)',
    '$$ = new (require(\'./ast/IterationStatement\').ForStatementNode)(null, $4, null, $7)',
  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement'),
    require('./LexicalDeclaration'),
    require('./VariableDeclarationList'),
    require('./LeftHandSideExpression'),
    require('./ForDeclaration'),
    require('./AssignmentExpression_In'),
    require('./ForBinding'),
    require('./Expression'),
  ],
};
