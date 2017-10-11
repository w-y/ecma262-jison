module.exports = {
  conditions: [''],
  name: 'JSXClosingElement',
  rules: [
    'JSXClosing JSXElementName >',
  ],
  handlers: [
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./JSXElementName'),
  ],
};
