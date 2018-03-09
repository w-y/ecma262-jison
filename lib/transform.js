'use strict';

var transLex = function transLex(lexs) {
  var rules = [];
  for (var i = 0; i < lexs.length; i++) {
    if (Array.isArray(lexs[i])) {
      rules = rules.concat(transLex(lexs[i]));
    } else {
      rules.push([lexs[i].conditions, lexs[i].rule, lexs[i].handler]);
    }
  }
  return rules;
};

var transBnfImpl = function transBnfImpl(bnf, bnfTable, useJison) {
  if (!bnf.name) {
    return;
  }
  var table = bnfTable;

  table[bnf.name] = [];

  var rules = bnf.rules,
      subRules = bnf.subRules,
      handlers = bnf.handlers;


  for (var ii = 0; ii < rules.length; ii++) {
    // NOTICE: add location code auto
    var segments = rules[ii].split(' ');
    var locPrefix = '\n      @$ = @1;\n    ';

    if (segments.length > 1) {
      locPrefix = '\n        // automaticall add location info\n        @$ = require(\'./util\').mergeLoc(@1, @' + segments.length + ');\n      ';
    }
    var newHandler = '' + locPrefix + handlers[ii];

    if (useJison) {
      table[bnf.name].push([rules[ii], handlers[ii]]);
    } else {
      table[bnf.name].push([rules[ii], newHandler]);
    }
  }

  for (var _ii = 0; _ii < subRules.length; _ii++) {
    transBnfImpl(subRules[_ii], table, useJison);
  }
};

var transBnf = function transBnf(bnf) {
  var useJison = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var table = {};
  transBnfImpl(bnf, table, useJison);
  return table;
};

exports.transLex = transLex;
exports.transBnf = transBnf;