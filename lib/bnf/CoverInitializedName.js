'use strict';

// NOTE: This production exists
// so that ObjectLiteral can serve as a cover grammar for ObjectAssignmentPattern.
// It cannot occur in an actual object initializer.

module.exports = {
  conditions: [''],
  name: 'CoverInitializedName',
  rules: ['IdentifierReference Initializer_In'],
  handlers: ['throw new Error(\'Syntax Error\');'],
  subRules: [require('./IdentifierReference'), require('./Initializer_In')]
};