module.exports = {
  conditions: [''],
  name: 'LabelledStatement',
  rules: [
    'LabelIdentifier : LabelledItem',
  ],
  handlers: [
    '$$ = new (require(\'./ast/LabelledStatement\').LabelledStatementNode)($1, $3, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./LabelIdentifier'),
    require('./LabelledItem'),
  ],
};
