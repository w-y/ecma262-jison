module.exports = {
  name: 'SwitchStatement',
  conditions: [''],
  rules: [
    `switch ( Expression_In ) CaseBlock`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3 + $4 + $5`,
  ],
  subRules: [
    require('./Expression_In'),
    require('./CaseBlock'),
  ],
};
