const LF = {
  conditions: ['*'],
  rule: '\\u000A',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const VT = {
  conditions: ['*'],
  rule: '\\u000B',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const FF = {
  conditions: ['*'],
  rule: '\\u0020',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const NBSP = {
  conditions: ['*'],
  rule: '\\u00A0',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const ZWNJ = {
  conditions: ['*'],
  rule: '\\u200C',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const ZWJ = {
  conditions: ['*'],
  rule: '\\u200D',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const ZWNBSP = {
  conditions: ['*'],
  rule: '\\uFEFF',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const CR = {
  conditions: ['*'],
  rule: '\\u000D',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const LS = {
  conditions: ['*'],
  rule: '\\u2028',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};

const PS = {
  conditions: ['*'],
  rule: '\\u2029',
  handler: `
    return require('./util').parseToken.call(this, this.match);
  `,
};
