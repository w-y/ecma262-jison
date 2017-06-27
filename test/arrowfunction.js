var assert = require('assert');
const parser = require('../src/index');
const { createFileHelper } = require('../src/test/helpers');

describe('arrow function', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/arrowfunction.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    });
  });

  describe('arrow function with brace', function() {
    it('empty arrow function', function(done) {
      assert.equal('ExpressionStatement', ast.body[0].type);
      assert.equal(0, ast.body[0].range[0]);
      assert.equal(8, ast.body[0].range[1]);
      assert.equal('ArrowFunction', ast.body[0].expression.type);
      assert.equal(null, ast.body[0].expression.id);
      assert.equal('CoverParenthesizedExpression', ast.body[0].expression.params.type);
      assert.equal(0, ast.body[0].expression.params.range[0]);
      assert.equal(2, ast.body[0].expression.params.range[1]);
      assert.equal(0, ast.body[0].expression.params.expressions.length);

      assert.equal('BlockStatement', ast.body[0].expression.body.type);
      assert.equal(6, ast.body[0].expression.body.range[0]);
      assert.equal(8, ast.body[0].expression.body.range[1]);
      assert.equal(0, ast.body[0].expression.body.body.length);

      done();
    });

    it('empty arrow function with param', function(done) {
      assert.equal('ExpressionStatement', ast.body[1].type);
      assert.equal(10, ast.body[1].range[0]);
      assert.equal(18, ast.body[1].range[1]);
      assert.equal('ArrowFunction', ast.body[1].expression.type);
      assert.equal('Identifier', ast.body[1].expression.params.type);
      assert.equal('a', ast.body[1].expression.params.name);

      assert.equal('BlockStatement', ast.body[1].expression.body.type);
      assert.equal(15, ast.body[1].expression.body.range[0]);
      assert.equal(18, ast.body[1].expression.body.range[1]);
      assert.equal(0, ast.body[1].expression.body.body.length);

      done();
    });

    it('a, b => {}', function(done) {
      assert.equal('ExpressionStatement', ast.body[2].type);
      assert.equal(20, ast.body[2].range[0]);
      assert.equal(35, ast.body[2].range[1]);
      assert.equal('SequenceExpression', ast.body[2].expression.type);

      assert.equal(2, ast.body[2].expression.expressions.length);
      assert.equal('Identifier', ast.body[2].expression.expressions[0].type);
      assert.equal(20, ast.body[2].expression.expressions[0].range[0]);
      assert.equal(21, ast.body[2].expression.expressions[0].range[1]);

      assert.equal('ArrowFunction', ast.body[2].expression.expressions[1].type);
      assert.equal(23, ast.body[2].expression.expressions[1].range[0]);
      assert.equal(35, ast.body[2].expression.expressions[1].range[1]);

      assert.equal('BlockStatement', ast.body[2].expression.expressions[1].body.type);
      assert.equal(1, ast.body[2].expression.expressions[1].body.body.length);
      assert.equal('EmptyStatement', ast.body[2].expression.expressions[1].body.body[0].type);
      assert.equal(32, ast.body[2].expression.expressions[1].body.body[0].range[0]);
      assert.equal(33, ast.body[2].expression.expressions[1].body.body[0].range[1]);
      done();
    });

    it('({a}) => {}', function(done) {
      assert.equal('ExpressionStatement', ast.body[3].type);
      assert.equal(37, ast.body[3].range[0]);
      assert.equal(54, ast.body[3].range[1]);
      assert.equal('ArrowFunction', ast.body[3].expression.type);

      assert.equal('CoverParenthesizedExpression', ast.body[3].expression.params.type);
      assert.equal(37, ast.body[3].expression.params.range[0]);
      assert.equal(42, ast.body[3].expression.params.range[1]);
      assert.equal(1, ast.body[3].expression.params.expressions.length);
      assert.equal('ObjectLiteral', ast.body[3].expression.params.expressions[0].type);
      assert.equal(38, ast.body[3].expression.params.expressions[0].range[0]);
      assert.equal(41, ast.body[3].expression.params.expressions[0].range[1]);
      assert.equal(1, ast.body[3].expression.params.expressions[0].properties.length);
      assert.equal('a', ast.body[3].expression.params.expressions[0].properties[0].key.name);

      assert.equal('BlockStatement', ast.body[3].expression.body.type);
      assert.equal(46, ast.body[3].expression.body.range[0]);
      assert.equal(54, ast.body[3].expression.body.range[1]);
      assert.equal(1, ast.body[3].expression.body.body.length);
      assert.equal('ExpressionStatement', ast.body[3].expression.body.body[0].type);
      assert.equal('c', ast.body[3].expression.body.body[0].expression.name);
      assert.equal(50, ast.body[3].expression.body.body[0].expression.range[0]);
      assert.equal(51, ast.body[3].expression.body.body[0].expression.range[1]);

      done();
    });
  });

  describe('arrow function with parenthesis', function() {
    it('({a, b}) => ()', function(done) {
      assert.equal('ExpressionStatement', ast.body[4].type);
      assert.equal(56, ast.body[4].range[0]);
      assert.equal(72, ast.body[4].range[1]);
      assert.equal('ArrowFunction', ast.body[4].expression.type);

      assert.equal('CoverParenthesizedExpression', ast.body[4].expression.params.type);
      assert.equal(56, ast.body[4].expression.params.range[0]);
      assert.equal(64, ast.body[4].expression.params.range[1]);
      assert.equal(1, ast.body[4].expression.params.expressions.length);

      assert.equal('ObjectLiteral', ast.body[4].expression.params.expressions[0].type);
      assert.equal(57, ast.body[4].expression.params.expressions[0].range[0]);
      assert.equal(63, ast.body[4].expression.params.expressions[0].range[1]);
      assert.equal(2, ast.body[4].expression.params.expressions[0].properties.length);
      assert.equal('a', ast.body[4].expression.params.expressions[0].properties[0].key.name);
      assert.equal('b', ast.body[4].expression.params.expressions[0].properties[1].key.name);

      assert.equal('CoverParenthesizedExpression', ast.body[4].expression.body.type);
      assert.equal('c', ast.body[4].expression.body.expressions[0].name);
      assert.equal(69, ast.body[4].expression.body.expressions[0].range[0]);
      assert.equal(70, ast.body[4].expression.body.expressions[0].range[1]);
      done();
    });

    it('(a, b) => ()', function(done) {
      assert.equal('ExpressionStatement', ast.body[5].type);
      assert.equal(74, ast.body[5].range[0]);
      assert.equal(92, ast.body[5].range[1]);
      assert.equal('ArrowFunction', ast.body[5].expression.type);

      assert.equal('CoverParenthesizedExpression', ast.body[5].expression.params.type);
      assert.equal(74, ast.body[5].expression.params.range[0]);
      assert.equal(80, ast.body[5].expression.params.range[1]);
      assert.equal(1, ast.body[5].expression.params.expressions.length);

      assert.equal('SequenceExpression', ast.body[5].expression.params.expressions[0].type);
      assert.equal(2, ast.body[5].expression.params.expressions[0].expressions.length);
      assert.equal(75, ast.body[5].expression.params.expressions[0].range[0]);
      assert.equal(79, ast.body[5].expression.params.expressions[0].range[1]);
      assert.equal('a', ast.body[5].expression.params.expressions[0].expressions[0].name);
      assert.equal('b', ast.body[5].expression.params.expressions[0].expressions[1].name);

      assert.equal('CoverParenthesizedExpression', ast.body[5].expression.body.type);
      assert.equal('AdditiveExpression', ast.body[5].expression.body.expressions[0].type);
      assert.equal(85, ast.body[5].expression.body.expressions[0].range[0]);
      assert.equal(90, ast.body[5].expression.body.expressions[0].range[1]);
      assert.equal('+', ast.body[5].expression.body.expressions[0].operator);
      assert.equal('a', ast.body[5].expression.body.expressions[0].left.name);
      assert.equal('b', ast.body[5].expression.body.expressions[0].right.name);
      done();
    });
  });

  describe('arrow function no line terminator', function() {
    it('() line terminator => {}', function(done) {
      try {
        const ast2 = parser.parse('()\n => {}');
      } catch(ex) {
        assert.equal('no line terminator', ex.message);
        assert.equal(true, ex instanceof Error);
      }
      done();
    });

    it('() line terminator => ()', function(done) {
      try {
        const ast2 = parser.parse('()\n => ()');
      } catch(ex) {
        assert.equal('no line terminator', ex.message);
        assert.equal(true, ex instanceof Error);
      }
      done();
    });
  });
});
