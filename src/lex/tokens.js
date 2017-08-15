const rules = ['*'];

const TAB = {
  conditions: rules,
  rule: '\\u0009',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const LF = {
  conditions: rules,
  rule: '\\u000A',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const CR = {
  conditions: rules,
  rule: '\\u000D',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const LS = {
  conditions: rules,
  rule: '\\u2028',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const PS = {
  conditions: rules,
  rule: '\\u2029',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const VT = {
  conditions: rules,
  rule: '\\u000B',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const FF = {
  conditions: rules,
  rule: '\\u0020',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const NBSP = {
  conditions: rules,
  rule: '\\u00A0',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const ZWNJ = {
  conditions: rules,
  rule: '\\u200C',
  handler: `
    return require('./util').parseToken.call(this, this.match, 'ZWNJ');
  `,
};

const ZWJ = {
  conditions: rules,
  rule: '\\u200D',
  handler: `
    return require('./util').parseToken.call(this, this.match, 'ZWJ');
  `,
};

const ZWNBSP = {
  conditions: rules,
  rule: '\\uFEFF',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

exports.tokens = [
  TAB,
  LF,
  CR,
  LS,
  PS,
  VT,
  FF,
  NBSP,
  ZWNJ,
  ZWJ,
  ZWNBSP,
];
