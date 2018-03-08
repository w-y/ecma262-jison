'use strict';

module.exports = {
  conditions: [''],
  name: 'TemplateTail',
  rules: ['RIGHT_TEMPLATE_BRACE `', 'RIGHT_TEMPLATE_BRACE TemplateCharacters `'],
  handlers: ['$$ = new (require(\'./ast/Literal\').TemplateElementNode)(\'\', true, { loc: this._$, yy })', '$$ = new (require(\'./ast/Literal\').TemplateElementNode)($2, true, { loc: this._$, yy })'],
  subRules: [require('./TemplateCharacters')]
};