var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('regular expression', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/regexp.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('no classes', function() {
    it('simple', function(done) {
      assert.equal('RegexpLiteral', ast.body[0].expression.type);
      assert.equal('a', ast.body[0].expression.pattern);
      assert.equal('', ast.body[0].expression.flags);
      done();
    });
    it('keyword', function(done) {
      assert.equal('RegexpLiteral', ast.body[1].expression.type);
      assert.equal('for', ast.body[1].expression.pattern);
      assert.equal('', ast.body[1].expression.flags);
      done();
    });
    it('flags', function(done) {
      assert.equal('RegexpLiteral', ast.body[2].expression.type);
      assert.equal('a', ast.body[2].expression.pattern);
      assert.equal('gi', ast.body[2].expression.flags);
      done();
    });
    it('backslash sequence', function(done) {
      assert.equal('RegexpLiteral', ast.body[3].expression.type);
      assert.equal('\\d+', ast.body[3].expression.pattern);
      assert.equal('', ast.body[3].expression.flags);
      done();
    });
    it('backslash sequence and flags', function(done) {
      assert.equal('RegexpLiteral', ast.body[4].expression.type);
      assert.equal('\\d+', ast.body[4].expression.pattern);
      assert.equal('g', ast.body[4].expression.flags);
      done();
    });
  });

  describe('with classes', function() {
    it('simple', function(done) {
      assert.equal('RegexpLiteral', ast.body[5].expression.type);
      assert.equal('a[bc]', ast.body[5].expression.pattern);
      assert.equal('', ast.body[5].expression.flags);
      done();
    });
    it('embed', function(done) {
      assert.equal('RegexpLiteral', ast.body[6].expression.type);
      assert.equal('a[[]]', ast.body[6].expression.pattern);
      assert.equal('', ast.body[6].expression.flags);
      done();
    });
    it('wrong flags', function(done) {
      try {
        const astNew = parser.parse('/[a]/[');
        assert.equal(false, true);
        done();
      } catch (ex) {
        assert.equal(true, ex instanceof Error);
        done();
      }
    });
  });

  describe('real world', function() {
    it('/\w+\s/g', function(done) {
      assert.equal('RegexpLiteral', ast.body[7].expression.type);
      assert.equal('\\w+\\s', ast.body[7].expression.pattern);
      assert.equal('g', ast.body[7].expression.flags);
      done();
    });
    it('/([.*+?^=!:${}()|[\]\/\\])/g', function(done) {
      assert.equal('RegexpLiteral', ast.body[8].expression.type);
      assert.equal('([.*+?^=!:${}()|[\\]\\/\\\\])', ast.body[8].expression.pattern);
      assert.equal('g', ast.body[8].expression.flags);
      done();
    });
    it('/(\w+)\s(\w+)/', function(done) {
      assert.equal('(\\w+)\\s(\\w+)', ast.body[9].expression.pattern);
      assert.equal('', ast.body[9].expression.flags);
      done();
    });
    it('/(?:)/', function(done) {
      assert.equal('(?:)', ast.body[10].expression.pattern);
      assert.equal('', ast.body[10].expression.flags);
      done();
    });
  });

  describe('with other primary expression', function() {
    it('string', function(done) {
      assert.equal('Literal', ast.body[11].expression.type);
      assert.equal('/a/g', ast.body[11].expression.value);
      done();
    });

    it('array', function(done) {
      assert.equal('ArrayLiteral', ast.body[12].expression.type);
      assert.equal(2, ast.body[12].expression.elements.length);
      assert.equal('RegexpLiteral', ast.body[12].expression.elements[0].type);
      assert.equal('a', ast.body[12].expression.elements[0].pattern);
      assert.equal('g', ast.body[12].expression.elements[0].flags);

      assert.equal('RegexpLiteral', ast.body[12].expression.elements[1].type);
      assert.equal('\\d+', ast.body[12].expression.elements[1].pattern);
      assert.equal('', ast.body[12].expression.elements[1].flags);
      done();
    });

    it('block', function(done) {
      assert.equal('BlockStatement', ast.body[13].type);
      assert.equal('LabelledStatement', ast.body[13].body[0].type);
      assert.equal('a', ast.body[13].body[0].label.name);
      assert.equal('ExpressionStatement', ast.body[13].body[0].body.type);
      assert.equal('RegexpLiteral', ast.body[13].body[0].body.expression.type);
      assert.equal('a', ast.body[13].body[0].body.expression.pattern);
      assert.equal('EmptyStatement', ast.body[14].type);
      done();
    });
    it('template', function(done) {
      assert.equal('ExpressionStatement', ast.body[15].type);
      assert.equal('TemplateLiteral', ast.body[15].expression.type);
      assert.equal('TemplateElement', ast.body[15].expression.quasis[0].type);
      assert.equal('/', ast.body[15].expression.quasis[0].value);
      assert.equal('', ast.body[15].expression.quasis[1].value);
      assert.equal('RegexpLiteral', ast.body[15].expression.expressions[0].type);
      assert.equal('\\d+', ast.body[15].expression.expressions[0].pattern);
      assert.equal('g', ast.body[15].expression.expressions[0].flags);
      done();
    });
    it('div and start of regular expression', function(done) {
      assert.equal('ExpressionStatement', ast.body[16].type);
      assert.equal('MultiplicativeExpression', ast.body[16].expression.type);
      assert.equal('/', ast.body[16].expression.operator);
      assert.equal('RegexpLiteral', ast.body[16].expression.left.type);
      assert.equal('a', ast.body[16].expression.left.pattern);
      assert.equal('g', ast.body[16].expression.left.flags);
      assert.equal('RegexpLiteral', ast.body[16].expression.right.type);
      assert.equal('a', ast.body[16].expression.right.pattern);
      assert.equal('', ast.body[16].expression.right.flags);

      assert.equal('ExpressionStatement', ast.body[17].type);
      assert.equal('MultiplicativeExpression', ast.body[17].expression.type);
      assert.equal('/', ast.body[17].expression.operator);
      assert.equal('RegexpLiteral', ast.body[17].expression.left.type);
      assert.equal('a', ast.body[17].expression.left.pattern);
      assert.equal('g', ast.body[17].expression.left.flags);
      assert.equal('RegexpLiteral', ast.body[17].expression.right.type);
      assert.equal('a', ast.body[17].expression.right.pattern);
      assert.equal('i', ast.body[17].expression.right.flags);

      done();
    });
    it('/a/ /a/ /a/i', function(done) {
      assert.equal('ExpressionStatement', ast.body[18].type);
      assert.equal('MultiplicativeExpression', ast.body[18].expression.type);
      assert.equal('/', ast.body[18].expression.operator);

      assert.equal('MultiplicativeExpression', ast.body[18].expression.left.type);
      assert.equal('RegexpLiteral', ast.body[18].expression.left.left.type);
      assert.equal('a', ast.body[18].expression.left.left.pattern);
      assert.equal('', ast.body[18].expression.left.left.flags);

      assert.equal('Identifier', ast.body[18].expression.left.right.type);
      assert.equal('a', ast.body[18].expression.left.right.name);

      assert.equal('RegexpLiteral', ast.body[18].expression.right.type);
      assert.equal('a', ast.body[18].expression.right.pattern);
      assert.equal('i', ast.body[18].expression.right.flags);

      done();
    });
  });
});
