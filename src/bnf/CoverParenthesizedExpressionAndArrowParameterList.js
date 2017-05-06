module.exports = {
  conditions: [''],
  name: 'CoverParenthesizedExpressionAndArrowParameterList',
  rules: [
    '( Expression_In )',
    '( )',
    '( ... BindingIdentifier )',
    '( ... BindingPattern )',
    '( Expression_In , ... BindingIdentifier )',
    '( Expression_In , ... BindingPattern )',
  ],
  handlers: [
    '$$ = (require(\'./ast/CoverParenthesizedExpressionNode\'))([$2], { loc: this._$, lexer: yy.lexer })',
    '$$ = (require(\'./ast/CoverParenthesizedExpressionNode\'))([], { loc: this._$, lexer: yy.lexer })',
    '$$ = [new (require(\'./ast/BindingRestElement\').BindingIdentifierNode)($3, { loc: this._$, lexer: yy.lexer })]',
    '$$ = [new (require(\'./ast/BindingRestElement\').BindingPatternNode)($3, { loc: this._$, lexer: yy.lexer })]',
    '$$ = [$2].concat([new (require(\'./ast/BindingRestElement\').BindingPatternNode)($5, { loc: this._$, lexer: yy.lexer })])',
    '$$ = [$2].concat([new (require(\'./ast/BindingRestElement\').BindingPatternNode)($5, { loc: this._$, lexer: yy.lexer })])',
  ],
  subRules: [
    require('./Expression_In'),
    require('./BindingIdentifier'),
    require('./BindingPattern'),
  ],
};
