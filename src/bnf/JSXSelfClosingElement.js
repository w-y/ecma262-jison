module.exports = {
  conditions: [''],
  name: 'JSXSelfClosingElement',
  rules: [
    '< JSXElementName JSXSelfClosing',
    '< JSXElementName JSXSeperator JSXSelfClosing',
    '< JSXElementName JSXAttributes JSXSelfClosing',
    '< JSXElementName JSXSeperator JSXAttributes JSXSelfClosing',
  ],
  handlers: [
    '$$ = $1 + $2 + $3;',
    '$$ = $1 + $2 + $3 + $4;',
    '$$ = $1 + $2 + $3 + $4;',
    '$$ = $1 + $2 + $3 + $4;',
  ],
  subRules: [
    require('./JSXElementName'),
    require('./JSXAttributes'),
  ],
};
