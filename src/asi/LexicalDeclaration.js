// const getLoc = require('../util').getLoc;

module.exports = function asi(context, item, err, lastLoc) {
  return new (require('../ast/LexicalDeclaration').LexicalDeclarationNode)(item, { loc: lastLoc, yy: context.yy });
};
