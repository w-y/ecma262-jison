module.exports = {
  conditions: [''],
  name: 'JSXElement',
  rules: [
    'JSXSelfClosingElement',
    'JSXOpeningElement JSXClosingElement',
    'JSXOpeningElement JSXChildren JSXClosingElement',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./JSXSelfClosingElement'),
    require('./JSXOpeningElement'),
    require('./JSXClosingElement'),
    require('./JSXChildren'),
  ],
};
