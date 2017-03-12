module.exports = {
  conditions: [''],
  name: 'DebuggerStatement',
  rules: [
    `debugger ;`,
  ],
  handlers: [
    `$$ = $1 + $2`,
  ],
  subRules: [
  ],
};
