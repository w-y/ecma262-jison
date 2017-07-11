var assert = require('assert');
const parser = require('../src/index');
const { createFileHelper } = require('../src/test/helpers');

describe('template literal', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/template.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    });
  });

  describe('no substitution template', function() {
    it('empty string', function(done) {
      assert.equal('ExpressionStatement', ast.body[0].type);
      assert.equal('TemplateLiteral', ast.body[0].expression.type);
      assert.equal(1, ast.body[0].expression.quasis.length);
      assert.equal('TemplateElement', ast.body[0].expression.quasis[0].type);
      assert.equal('', ast.body[0].expression.quasis[0].value);
      // assert.equal(true, ast.body[0].expression.quasis[0].isTail);
      done();
    });
    it('escaped string', function(done) {
      assert.equal('ExpressionStatement', ast.body[1].type);
      assert.equal('TemplateLiteral', ast.body[1].expression.type);
      assert.equal(1, ast.body[1].expression.quasis.length);
      assert.equal('TemplateElement', ast.body[1].expression.quasis[0].type);
      assert.equal('hello \\`world\\`', ast.body[1].expression.quasis[0].value);
      // assert.equal(true, ast.body[0].expression.quasis[0].isTail);
      done();
    });
  });


  describe('substitution template', function() {
    it('`${a}}`', function(done) {
      assert.equal('ExpressionStatement', ast.body[2].type);
      assert.equal('TemplateLiteral', ast.body[2].expression.type);

      assert.equal(2, ast.body[2].expression.quasis.length);
      assert.equal('TemplateElement', ast.body[2].expression.quasis[0].type);
      assert.equal('', ast.body[2].expression.quasis[0].value);
      assert.equal('TemplateElement', ast.body[2].expression.quasis[1].type);
      assert.equal('}', ast.body[2].expression.quasis[1].value);
      assert.equal(true, ast.body[2].expression.quasis[1].isTail);

      assert.equal(1, ast.body[2].expression.expressions.length);
      assert.equal('Identifier', ast.body[2].expression.expressions[0].type);
      done();
    });

    it('`{${{a}}}`', function(done) {
      assert.equal('ExpressionStatement', ast.body[3].type);
      assert.equal('TemplateLiteral', ast.body[3].expression.type);

      assert.equal(2, ast.body[3].expression.quasis.length);
      assert.equal('TemplateElement', ast.body[3].expression.quasis[0].type);
      assert.equal('{', ast.body[3].expression.quasis[0].value);
      assert.equal(false, ast.body[3].expression.quasis[0].isTail);
      assert.equal('TemplateElement', ast.body[3].expression.quasis[1].type);
      assert.equal('}', ast.body[3].expression.quasis[1].value);
      assert.equal(true, ast.body[3].expression.quasis[1].isTail);


      assert.equal(1, ast.body[3].expression.expressions.length);
      assert.equal('ObjectLiteral', ast.body[3].expression.expressions[0].type);
      assert.equal('Identifier', ast.body[3].expression.expressions[0].properties[0].key.type);
      assert.equal('a', ast.body[3].expression.expressions[0].properties[0].key.name);
      done();
    });

    it('`{${[`a`]} + ${\'a\'}`', function(done) {
      assert.equal('ExpressionStatement', ast.body[4].type);
      assert.equal('TemplateLiteral', ast.body[4].expression.type);

      assert.equal(3, ast.body[4].expression.quasis.length);
      assert.equal('TemplateElement', ast.body[4].expression.quasis[0].type);
      assert.equal('{', ast.body[4].expression.quasis[0].value);
      assert.equal(false, ast.body[4].expression.quasis[0].isTail);
      assert.equal('TemplateElement', ast.body[4].expression.quasis[1].type);
      assert.equal(' + ', ast.body[4].expression.quasis[1].value);
      assert.equal(false, ast.body[4].expression.quasis[1].isTail);

      assert.equal('', ast.body[4].expression.quasis[2].value);
      assert.equal(true, ast.body[4].expression.quasis[2].isTail);

      assert.equal(2, ast.body[4].expression.expressions.length);
      assert.equal('ArrayLiteral', ast.body[4].expression.expressions[0].type);
      assert.equal(1, ast.body[4].expression.expressions[0].elements.length);
      assert.equal('TemplateLiteral', ast.body[4].expression.expressions[0].elements[0].type);

      assert.equal('TemplateElement', ast.body[4].expression.expressions[0].elements[0].quasis[0].type);
      assert.equal('a', ast.body[4].expression.expressions[0].elements[0].quasis[0].value);
      // assert.equal(true, ast.body[4].expression.expressions[0].elements[0].quasis[0].isTail);

      assert.equal('Literal', ast.body[4].expression.expressions[1].type);
      assert.equal('a', ast.body[4].expression.expressions[1].value);
      done();
    });

  });
});
