const transLex = (lexs) => {
  let rules = [];
  for (let i = 0; i < lexs.length; i++) {
    if (Array.isArray(lexs[i])) {
      rules = rules.concat(transLex(lexs[i]));
    } else {
      rules.push([lexs[i].conditions, lexs[i].rule, lexs[i].handler]);
    }
  }
  return rules;
};

const transBnfImpl = (bnf, bnfTable, useJison) => {
  if (!bnf.name) { return; }
  const table = bnfTable;

  table[bnf.name] = [];

  const { rules, subRules, handlers } = bnf;

  for (let ii = 0; ii < rules.length; ii++) {
    // NOTICE: add location code auto
    const segments = rules[ii].split(' ');
    let locPrefix = `
      @$ = @1;
    `;

    if (segments.length > 1) {
      locPrefix = `
        // automaticall add location info
        @$ = require('./util').mergeLoc(@1, @${segments.length});
      `;
    }
    const newHandler = `${locPrefix}${handlers[ii]}`;

    if (useJison) {
      table[bnf.name].push([rules[ii], handlers[ii]]);
    } else {
      table[bnf.name].push([rules[ii], newHandler]);
    }
  }

  for (let ii = 0; ii < subRules.length; ii++) {
    transBnfImpl(subRules[ii], table, useJison);
  }
};

const transBnf = (bnf, useJison = false) => {
  const table = {};
  transBnfImpl(bnf, table, useJison);
  return table;
};

exports.transLex = transLex;
exports.transBnf = transBnf;
