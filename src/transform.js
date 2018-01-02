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

const transBnfImpl = (bnf, bnfTable) => {
  if (!bnf.name) { return; }
  const table = bnfTable;

  table[bnf.name] = [];

  for (let i = 0; i < bnf.conditions.length; i++) {
    const condition = bnf.conditions[i] || 'INITIAL';
    const rules = bnf.rules[condition] || bnf.rules;
    const subRules = bnf.subRules[condition] || bnf.subRules;
    const handlers = bnf.handlers[condition] || bnf.handlers;

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

      table[bnf.name].push([rules[ii], newHandler]);
    }

    for (let ii = 0; ii < subRules.length; ii++) {
      transBnfImpl(subRules[ii], table);
    }
  }
};

const transBnf = (bnf) => {
  const table = {};
  transBnfImpl(bnf, table);
  return table;
};

exports.transLex = transLex;
exports.transBnf = transBnf;
