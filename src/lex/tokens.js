const LF = {
  conditions: ['*'],
  rule: '\\u000A',
  handler: `
    return require('./util').parseToken.call(this, '');
  `,
};

const CR = {
  conditions: ['*'],
  rule: '\\u000D',
  handler: `
    return require('./util').parseToken.call(this, '');
  `,
};

const LS = {
  conditions: ['*'],
  rule: '\\u2028',
  handler: `
    return require('./util').parseToken.call(this, '');
  `,
};

const PS = {
  conditions: ['*'],
  rule: '\\u2029',
  handler: `
    return require('./util').parseToken.call(this, '');
  `,
};

const VT = {
  conditions: ['*'],
  rule: '\\u000B',
  handler: `
    return require('./util').parseToken.call(this, '');
  `,
};

const FF = {
  conditions: ['*'],
  rule: '\\u0020',
  handler: `
    return require('./util').parseToken.call(this, '');
  `,
};

const NBSP = {
  conditions: ['*'],
  rule: '\\u00A0',
  handler: `
    return require('./util').parseToken.call(this, '');
  `,
};

const ZWNJ = {
  conditions: ['*'],
  rule: '\\u200C',
  handler: `
    return require('./util').parseToken.call(this, 'ZWNJ');
  `,
};

const ZWJ = {
  conditions: ['*'],
  rule: '\\u200D',
  handler: `
    return require('./util').parseToken.call(this, 'ZWJ');
  `,
};

const ZWNBSP = {
  conditions: ['*'],
  rule: '\\uFEFF',
  handler: `
    return require('./util').parseToken.call(this, '');
  `,
};

exports.tokens = [
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
