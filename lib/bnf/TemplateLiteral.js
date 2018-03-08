'use strict';

module.exports = {
  conditions: [''],
  name: 'TemplateLiteral',
  rules: ['NoSubstitutionTemplate', 'TemplateHead Expression_In TemplateSpans'],
  handlers: ['$$ = new (require(\'./ast/Literal\').TemplateLiteralNode)([$1], [], { loc: this._$, yy })', '$$ = new (require(\'./ast/Literal\').TemplateLiteralNode)([$1].concat($3.quasis), [$2].concat($3.expressions), { loc: this._$, yy })'],
  subRules: [require('./NoSubstitutionTemplate'), require('./TemplateHead'), require('./Expression_In'), require('./TemplateSpans')]
};