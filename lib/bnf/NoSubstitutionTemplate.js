'use strict';

module.exports = {
  conditions: [''],
  name: 'NoSubstitutionTemplate',
  rules: ['` `', '` TemplateCharacters `'],
  handlers: ['$$ = new (require(\'./ast/Literal\').TemplateElementNode)(\'\', true, { loc: this._$, yy })', '$$ = new (require(\'./ast/Literal\').TemplateElementNode)($2, true, { loc: this._$, yy })'],
  subRules: [require('./TemplateCharacters')]
};