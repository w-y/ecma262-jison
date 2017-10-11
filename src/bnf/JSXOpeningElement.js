module.exports = {
  conditions: [''],
  name: 'JSXOpeningElement',
  rules: [
    '< JSXElementName >',
    '< JSXElementName JSXAttributes >',
    '< JSXElementName JSXSeperator JSXAttributes >',
  ],
  handlers: [
    '$$ = $1 + $2 + $3;',
    '$$ = $1 + $2 + $3;',
    '$$ = $1 + $2 + $3 + $4;',
  ],
  subRules: [
    require('./JSXElementName'),
    require('./JSXAttributes'),
  ],
};
