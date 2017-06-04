var assert = require('assert');
const parser = require('../src/index');
const { createFileHelper } = require('../src/test/helpers');

describe('expression', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/statement.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    });
  });

  describe('block statement', function() {
    it('{}', function(done) {
      assert.equal('BlockStatement', ast.body[0].type);
      assert.equal(0, ast.body[0].body.length);
      done();
    });

    it('{;}', function(done) {
      assert.equal('BlockStatement', ast.body[1].type);
      assert.equal(1, ast.body[1].body.length);
      assert.equal('EmptyStatement', ast.body[1].body[0].type);
      done();
    });

    it('{ a: 1; }', function(done) {
      assert.equal('BlockStatement', ast.body[2].type);
      assert.equal(1, ast.body[2].body.length);
      assert.equal('LabelledStatement', ast.body[2].body[0].type);
      assert.equal('a', ast.body[2].body[0].label.name);
      assert.equal('Literal', ast.body[2].body[0].body.expression.type);
      assert.equal(1, ast.body[2].body[0].body.expression.value);
      done();
    });

    it('{ a: 1 }', function(done) {
      assert.equal('BlockStatement', ast.body[3].type);
      assert.equal(1, ast.body[3].body.length);
      assert.equal('LabelledStatement', ast.body[3].body[0].type);
      assert.equal('a', ast.body[3].body[0].label.name);
      assert.equal('Literal', ast.body[3].body[0].body.expression.type);
      assert.equal(1, ast.body[3].body[0].body.expression.value);
      done();
    });
    it('statements list', function(done) {
      assert.equal('BlockStatement', ast.body[4].type);
      assert.equal(2, ast.body[4].body.length);

      assert.equal('VariableStatement', ast.body[4].body[0].type);
      assert.equal(1, ast.body[4].body[0].declarations.length);
      assert.equal('a', ast.body[4].body[0].declarations[0].id.name);
      assert.equal(100, ast.body[4].body[0].declarations[0].init.value);

      assert.equal('LexicalDeclaration', ast.body[4].body[1].type);
      assert.equal(2, ast.body[4].body[1].declarations.length);
      assert.equal('c', ast.body[4].body[1].declarations[0].id.name);
      assert.equal(null, ast.body[4].body[1].declarations[0].init);
      assert.equal('d', ast.body[4].body[1].declarations[1].id.name);
      assert.equal(1, ast.body[4].body[1].declarations[1].init.value);
      done();
    });
  });

  describe('if statement', function() {
    it('only if',function(done) {
      assert.equal('IfStatement', ast.body[5].type);
      assert.equal('a', ast.body[5].test.name);
      assert.equal('BlockStatement', ast.body[5].consequent.type);
      assert.equal(0, ast.body[5].consequent.body.length);

      assert.equal('IfStatement', ast.body[6].type);
      assert.equal(true, ast.body[6].test.value);
      assert.equal('BlockStatement', ast.body[6].consequent.type);
      assert.equal(0, ast.body[6].consequent.body.length);

      done();
    });

    it('if else',function(done) {
      assert.equal('IfStatement', ast.body[7].type);
      assert.equal('exp', ast.body[7].test.name);
      assert.equal('BlockStatement', ast.body[7].consequent.type);
      assert.equal('BlockStatement', ast.body[7].alternate.type);
      assert.equal(1, ast.body[7].alternate.body.length);
      assert.equal('ExpressionStatement', ast.body[7].alternate.body[0].type);
      assert.equal('CallExpression', ast.body[7].alternate.body[0].expression.type);
      assert.equal('MemberExpression', ast.body[7].alternate.body[0].expression.callee.type);
      assert.equal('console', ast.body[7].alternate.body[0].expression.callee.element.name);
      assert.equal('log', ast.body[7].alternate.body[0].expression.callee.property.name);
      assert.equal(1, ast.body[7].alternate.body[0].expression.params.length);
      assert.equal('hello', ast.body[7].alternate.body[0].expression.params[0].value);

      assert.equal('IfStatement', ast.body[8].type);
      assert.equal('a', ast.body[8].test.name);

      assert.equal('BlockStatement', ast.body[8].consequent.type);
      assert.equal(0, ast.body[8].consequent.body.length);

      assert.equal('IfStatement', ast.body[8].alternate.type);
      assert.equal('b', ast.body[8].alternate.test.name);

      assert.equal('BlockStatement', ast.body[8].alternate.consequent.type);
      assert.equal(0, ast.body[8].alternate.consequent.body.length);

      assert.equal('BlockStatement', ast.body[8].alternate.alternate.type);
      assert.equal(1, ast.body[8].alternate.alternate.body.length);
      assert.equal('EmptyStatement', ast.body[8].alternate.alternate.body[0].type);
      done();
    });
  });

  describe('while statements', function() {
    it('do while', function(done) {
      assert.equal('DoWhileStatement', ast.body[9].type);
      assert.equal('exp', ast.body[9].test.name);
      assert.equal('BlockStatement', ast.body[9].body.type);
      assert.equal(1, ast.body[9].body.body.length);
      assert.equal('EmptyStatement', ast.body[9].body.body[0].type);
      done();
    });

    it('while', function(done) {
      assert.equal('WhileStatement', ast.body[10].type);
      assert.equal('RelationalExpression', ast.body[10].test.type);
      assert.equal('<', ast.body[10].test.operator);
      assert.equal('i', ast.body[10].test.left.name);
      assert.equal(100, ast.body[10].test.right.value);
      assert.equal(1, ast.body[10].body.body.length);
      assert.equal('ExpressionStatement', ast.body[10].body.body[0].type);
      assert.equal('UpdateExpression', ast.body[10].body.body[0].expression.type);

      done();
    });
  });

  describe('for statements', function() {
    it('for lexical declarations', function(done) {
      assert.equal('ForStatement', ast.body[11].type);
      assert.equal('LexicalDeclaration', ast.body[11].init.type);
      assert.equal('a', ast.body[11].init.declarations[0].id.name);
      assert.equal(1, ast.body[11].init.declarations[0].init.value);
      assert.equal('RelationalExpression', ast.body[11].test.type);
      assert.equal('<', ast.body[11].test.operator);
      assert.equal('a', ast.body[11].test.left.name);
      assert.equal(10, ast.body[11].test.right.value);
      assert.equal('UpdateExpression', ast.body[11].update.type);
      assert.equal('++', ast.body[11].update.operator);
      assert.equal('i', ast.body[11].update.operand.name);
      assert.equal(false, ast.body[11].update.prefix);

      done();
    });

    it('for variable declarations', function(done) {
      assert.equal('ForStatement', ast.body[12].type);
      assert.equal('VariableStatement', ast.body[12].init.type);
      assert.equal(2, ast.body[12].init.declarations.length);
      assert.equal('i', ast.body[12].init.declarations[0].id.name);
      assert.equal(100, ast.body[12].init.declarations[0].init.value);
      assert.equal('j', ast.body[12].init.declarations[1].id.name);
      assert.equal(0, ast.body[12].init.declarations[1].init.value);
      assert.equal('RelationalExpression', ast.body[12].test.type);
      assert.equal('>=', ast.body[12].test.operator);
      assert.equal('i', ast.body[12].test.left.name);
      assert.equal(0, ast.body[12].test.right.value);
      assert.equal('UpdateExpression', ast.body[12].update.type);
      assert.equal('--', ast.body[12].update.operator);
      assert.equal('i', ast.body[12].update.operand.name);
      assert.equal(true, ast.body[12].update.prefix);

      assert.equal('ForStatement', ast.body[13].type);
      assert.equal('VariableStatement', ast.body[13].init.type);
      assert.equal(null, ast.body[13].test);
      assert.equal(null, ast.body[13].update);

      assert.equal('ForStatement', ast.body[14].type);
      assert.equal('VariableStatement', ast.body[14].init.type);
      assert.equal('i', ast.body[14].test.name);
      assert.equal(null, ast.body[14].update);

      assert.equal('ForStatement', ast.body[15].type);
      assert.equal('VariableStatement', ast.body[15].init.type);
      assert.equal(null, ast.body[15].test);
      assert.equal('i', ast.body[15].update.name);

      done();
    });

    it('for in', function(done) {
      assert.equal('ForInStatement', ast.body[16].type);
      assert.equal('i', ast.body[16].left.name);
      assert.equal('ArrayLiteral', ast.body[16].right.type);
      assert.equal(3, ast.body[16].right.elements.length);
      assert.equal(1, ast.body[16].right.elements[0].value);
      assert.equal(2, ast.body[16].right.elements[1].value);
      assert.equal('a', ast.body[16].right.elements[2].value);

      assert.equal('ForInStatement', ast.body[17].type);
      assert.equal('LexicalDeclaration', ast.body[17].left.type);
      assert.equal(1, ast.body[17].left.declarations.length);
      assert.equal('VariableDeclarator', ast.body[17].left.declarations[0].type);
      assert.equal('a', ast.body[17].left.declarations[0].id.name);
      assert.equal(3, ast.body[17].right.elements.length);

      // NOTICE:
      // in operator and for in
      // https://stackoverflow.com/questions/41569958/javascript-for-statement-and-operator-in
      try{
        parser.parse('for (let a = b in c; false;);');
      } catch(ex) {
        assert.equal(true, ex instanceof Error);
      }

      const tempAst = parser.parse('for (let a = (b in c); false;);');
      assert.equal('ForStatement', tempAst.body[0].type);

      done();
    });

    it('for of', function(done) {
      assert.equal('ForOfStatement', ast.body[18].type);
      assert.equal('a', ast.body[18].left.name);
      assert.equal('ArrayLiteral', ast.body[18].right.type);
      assert.equal(3, ast.body[18].right.elements.length);

      assert.equal('ForOfStatement', ast.body[19].type);
      assert.equal('VariableStatement', ast.body[19].left.type);
      assert.equal('VariableDeclarator', ast.body[19].left.declarations[0].type);
      assert.equal('a', ast.body[19].left.declarations[0].id.name);
      assert.equal(0, ast.body[19].right.elements.length);

      assert.equal('LexicalDeclaration', ast.body[20].left.type);
      assert.equal('VariableDeclarator', ast.body[20].left.declarations[0].type);
      assert.equal('b', ast.body[20].left.declarations[0].id.name);
      assert.equal(0, ast.body[20].right.elements.length);

      done();
    });

    it('for initial test update', function(done) {
      assert.equal('ForStatement', ast.body[21].type);
      assert.equal('a', ast.body[21].init.name);
      assert.equal('b', ast.body[21].test.name);
      assert.equal('c', ast.body[21].update.name);
      assert.equal('EmptyStatement', ast.body[21].body.type);

      assert.equal('ForStatement', ast.body[22].type);
      assert.equal('a', ast.body[22].init.name);
      assert.equal(null, ast.body[22].test);
      assert.equal('c', ast.body[22].update.name);
      assert.equal('BlockStatement', ast.body[22].body.type);
      assert.equal(0, ast.body[22].body.body.length);

      assert.equal('ForStatement', ast.body[23].type);
      assert.equal('a', ast.body[23].init.name);
      assert.equal(null, ast.body[23].test);
      assert.equal(null, ast.body[23].update);
      assert.equal('BlockStatement', ast.body[23].body.type);
      assert.equal(0, ast.body[23].body.body.length);

      assert.equal('ForStatement', ast.body[24].type);
      assert.equal(null, ast.body[24].init);
      assert.equal('a', ast.body[24].test.name);
      assert.equal(null, ast.body[24].update);
      assert.equal('BlockStatement', ast.body[24].body.type);
      assert.equal(0, ast.body[24].body.body.length);

      assert.equal('ForStatement', ast.body[25].type);
      assert.equal(null, ast.body[25].init);
      assert.equal(null, ast.body[25].test);
      assert.equal(null, ast.body[25].update);
      assert.equal('BlockStatement', ast.body[25].body.type);
      assert.equal(0, ast.body[25].body.body.length);

      assert.equal('ForStatement', ast.body[26].type);
      assert.equal(null, ast.body[26].init);
      assert.equal('exp', ast.body[26].test.name);
      assert.equal(null, ast.body[26].update);
      assert.equal('BlockStatement', ast.body[26].body.type);
      assert.equal(0, ast.body[26].body.body.length);

      done();
    });
  });

  describe('switch statements', function() {
    it('switch 0 cases', function(done) {
      assert.equal('SwitchStatement', ast.body[27].type);
      assert.equal('cond', ast.body[27].discriminant.name);
      assert.equal(0, ast.body[27].cases.length);

      assert.equal('SwitchStatement', ast.body[28].type);
      assert.equal('cond', ast.body[28].discriminant.name);
      assert.equal(1, ast.body[28].cases.length);
      assert.equal('SwitchCase', ast.body[28].cases[0].type);
      assert.equal(1, ast.body[28].cases[0].test.value);
      assert.equal('BlockStatement', ast.body[28].cases[0].consequent[0].type);
      assert.equal(1, ast.body[28].cases[0].consequent[0].body.length);
      assert.equal('BreakStatement', ast.body[28].cases[0].consequent[0].body[0].type);

      done();
    });

    it('switch case and default', function(done) {
      assert.equal('SwitchStatement', ast.body[29].type);
      assert.equal('AdditiveExpression', ast.body[29].discriminant.type);
      assert.equal('cond', ast.body[29].discriminant.left.name);
      assert.equal(1, ast.body[29].discriminant.right.value);
      assert.equal('a', ast.body[29].cases[0].test.name);
      assert.equal('BlockStatement', ast.body[29].cases[0].consequent[0].type);
      assert.equal(2, ast.body[29].cases.length);
      assert.equal(2, ast.body[29].cases[0].consequent[0].body.length);

      assert.equal('ExpressionStatement', ast.body[29].cases[0].consequent[0].body[0].type);
      assert.equal('CallExpression', ast.body[29].cases[0].consequent[0].body[0].expression.type);
      assert.equal('BreakStatement', ast.body[29].cases[0].consequent[0].body[1].type);
      assert.equal(2, ast.body[29].cases[1].consequent.length);
      assert.equal('ExpressionStatement', ast.body[29].cases[1].consequent[0].type);
      assert.equal('foo', ast.body[29].cases[1].consequent[0].expression.name);
      assert.equal('BreakStatement', ast.body[29].cases[1].consequent[1].type);
      done();
    });
  });

  describe('switch statements', function() {
    it('with statement block', function(done) {
      assert.equal('WithStatement', ast.body[30].type);
      assert.equal('obj', ast.body[30].id.name);
      assert.equal('BlockStatement', ast.body[30].body.type);
      done();
    });

    it('with statement', function(done) {
      assert.equal('WithStatement', ast.body[31].type);
      assert.equal('obj', ast.body[31].id.name);
      assert.equal('EmptyStatement', ast.body[31].body.type);
      assert.equal('EmptyStatement', ast.body[32].type);
      done();
    });
  });

  describe('throw statements', function() {
    it('throw expression', function(done) {
      assert.equal('ThrowStatement', ast.body[33].type);
      assert.equal('NewExpression', ast.body[33].params.type);
      assert.equal('Error', ast.body[33].params.callee.name);
      assert.equal(0, ast.body[33].params.params.length);

      assert.equal('ThrowStatement', ast.body[34].type);
      assert.equal('CoverParenthesizedExpression', ast.body[34].params.type);
      assert.equal('FunctionExpression', ast.body[34].params.expressions[0].type);
      assert.equal(null, ast.body[34].params.expressions[0].id);
      assert.equal(2, ast.body[34].params.expressions[0].params.length);
      assert.equal('BlockStatement', ast.body[34].params.expressions[0].body.type);
      try{
        parser.parse('throw\na;');
      } catch(ex) {
        assert.equal(true, ex instanceof Error);
      }

      done();
    });
  });

  describe('try catch statements', function() {
    it('try catch', function(done) {
      assert.equal('TryStatement', ast.body[35].type);
      assert.equal('BlockStatement', ast.body[35].block.type);
      assert.equal('CatchClause', ast.body[35].handler.type);
      assert.equal('ex', ast.body[35].handler.id.name);
      assert.equal('BlockStatement', ast.body[35].handler.body.type);
      assert.equal('EmptyStatement', ast.body[35].handler.body.body[0].type);
      done();
    });
  });

  describe('return statement', function() {
    it('function return', function(done) {
      assert.equal('FunctionDeclaration', ast.body[36].type);
      assert.equal('ReturnStatement', ast.body[36].body[0].type);
      assert.equal('ObjectLiteral', ast.body[36].body[0].params.type);
      assert.equal(1, ast.body[36].body[0].params.properties.length);
      assert.equal('name', ast.body[36].body[0].params.properties[0].key);
      assert.equal('test', ast.body[36].body[0].params.properties[0].value.value);
      done();
    });
    it('if return void', function(done) {
      assert.equal('IfStatement', ast.body[37].body[0].type);
      assert.equal('ReturnStatement', ast.body[37].body[0].consequent.body[0].type);
      assert.equal('ReturnStatement', ast.body[37].body[0].consequent.body[0].type);
      assert.equal(null, ast.body[37].body[0].consequent.body[0].params);
      done();
    });
  });
});
