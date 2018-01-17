module.exports = {
  conditions: [''],
  name: 'Script',
  rules: [
    'ScriptBody',
  ],
  handlers: [
    `
      $$ = new (require('./ast/ScriptNode'))($1, { loc: this._$, yy });
      $$.sourceType = $1.sourceType;
      if (yy.comments) {
        for (let i = 0; i < yy.comments.length; i++) {
          const comments = yy.comments;
          const comment = comments[i];
          if (yy.comments[i].leadingLinkNode) {
            yy.comments[i].leadingLinkNode.leadingComments.push({
              type: comment.type,
              value: comment.buffer.join(''),
              range: [comment.range[0], comment.range[1]],
            });
            comment.hasLinked = true;
          }
          if (yy.comments[i].trailingLinkNode) {
            yy.comments[i].trailingLinkNode.trailingComments.push({
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

        for (let i = 0; i < yy.comments.length; i++) {
          const comments = yy.comments;
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
