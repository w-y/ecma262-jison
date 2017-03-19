module.exports = {
  conditions: [''],
  name: 'ArrayLiteral',
  rules: [
    '[ ]',
    '[ Elision ]',
    '[ ElementList ]',
    '[ ElementList , Elision ]',
  ],
  handlers: [
    '$$ = $1 + $2',
    '$$ = $1 + $2 + $3',
    '$$ = $1 + $2 + $3',
    '$$ = $1 + $2 + $3 + $4 + $5',
  ],
  subRules: [
    require('./Elision'),
    require('./ElementList'),
  ],
};
