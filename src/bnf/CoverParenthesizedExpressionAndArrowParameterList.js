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
    '$$ = new (require(\'./ast/CoverParenthesizedExpressionNode\'))([$2], { loc: this._$, yy })',
    '$$ = new (require(\'./ast/CoverParenthesizedExpressionNode\'))([], { loc: this._$, yy })',
    '$$ = [new (require(\'./ast/BindingRestElement\').BindingIdentifierNode)($3, { loc: this._$, yy })]',
    '$$ = [new (require(\'./ast/BindingRestElement\').BindingPatternNode)($3, { loc: this._$, yy })]',
    '$$ = [$2].concat([new (require(\'./ast/BindingRestElement\').BindingPatternNode)($5, { loc: this._$, yy })])',
    '$$ = [$2].concat([new (require(\'./ast/BindingRestElement\').BindingPatternNode)($5, { loc: this._$, yy })])',
  ],
  subRules: [
    require('./Expression_In'),
    require('./BindingIdentifier'),
    require('./BindingPattern'),
  ],
};
