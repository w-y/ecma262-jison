module.exports = {
  conditions: [''],
  name: 'Script',
  rules: [
    'ScriptBody',
  ],
  handlers: [
    `
      $$ = new (require('./ast/ScriptNode'))($1, { loc: this._$, yy });
      if (yy.lexer.comments) {
        for (let i = 0; i < yy.lexer.comments.length; i++) {
          const comments = yy.lexer.comments;
          const comment = comments[i];
          if (yy.lexer.comments[i].leadingLinkNode) {
            yy.lexer.comments[i].leadingLinkNode.leadingComments.push({
              type: comment.type,
              value: comment.buffer.join(''),
              range: [comment.range[0], comment.range[1]],
            });
            comment.hasLinked = true;
          }
          if (yy.lexer.comments[i].trailingLinkNode) {
            yy.lexer.comments[i].trailingLinkNode.trailingComments.push({
              type: comment.type,
              value: comment.buffer.join(''),
              range: [comment.range[0], comment.range[1]],
            });
            comment.hasLinked = true;
          }
        }
        // NOTICE:
        // still some comments will not link to the ast node
        // (e.g, "return /*comment*/ ;", comments in the end)
        // here simply put all these comments to the root node

        for (let i = 0; i < yy.lexer.comments.length; i++) {
          const comments = yy.lexer.comments;
          const comment = comments[i];

          if (!comment.hasLinked) {
            $$.trailingComments.push({
              type: comment.type,
              value: comment.buffer.join(''),
              range: [comment.range[0], comment.range[1]],
            });
          }
        }
      }
      return $$;
    `,
  ],
  subRules: [
    require('./ScriptBody'),
  ],
};
