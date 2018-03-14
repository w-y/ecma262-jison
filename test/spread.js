var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('spread', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/spread.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('spread expression', function() {
    it('array literal', function(done) {
      assert.equal('ExpressionStatement', ast.body[0].type);
      assert.equal('ArrayLiteral', ast.body[0].expression.type);
      assert.equal(1, ast.body[0].expression.elements.length);
      assert.equal('SpreadElement', ast.body[0].expression.elements[0].type);
      assert.equal('Identifier', ast.body[0].expression.elements[0].element.type);
      assert.equal('a', ast.body[0].expression.elements[0].element.name);
      done();
    });

    it('property definition', function(done) {
      assert.equal('ExpressionStatement', ast.body[1].type);
      assert.equal('AssignmentExpression', ast.body[1].expression.type);
      assert.equal('ObjectLiteral', ast.body[1].expression.right.type);
      assert.equal(2, ast.body[1].expression.right.properties.length);
      assert.equal('SpreadProperty', ast.body[1].expression.right.properties[1].type);
      done();
    });

    it('array rest element', function(done) {
      assert.equal('LexicalDeclaration', ast.body[2].type);
      assert.equal(1, ast.body[2].declarations.length);
      assert.equal('VariableDeclarator', ast.body[2].declarations[0].type);

      assert.equal('ArrayBindingPattern', ast.body[2].declarations[0].id.type);

      assert.equal(2, ast.body[2].declarations[0].id.elements.length);

      assert.equal('Identifier', ast.body[2].declarations[0].id.elements[0].value.type);
      assert.equal('a', ast.body[2].declarations[0].id.elements[0].value.name);

      assert.equal('BindingRestElement', ast.body[2].declarations[0].id.elements[1].type);
      assert.equal('Identifier', ast.body[2].declarations[0].id.elements[1].id.type);
      assert.equal('b', ast.body[2].declarations[0].id.elements[1].id.name);

      assert.equal('Identifier', ast.body[2].declarations[0].init.type);
      assert.equal('c', ast.body[2].declarations[0].init.name);
      done();
    });

    it('object rest element', function(done) {
      assert.equal('LexicalDeclaration', ast.body[3].type);
      assert.equal(1, ast.body[3].declarations.length);
      assert.equal('VariableDeclarator', ast.body[3].declarations[0].type);

      assert.equal('ObjectLiteral', ast.body[3].declarations[0].id.type);

      assert.equal(2, ast.body[3].declarations[0].id.properties.length);

      assert.equal('Identifier', ast.body[3].declarations[0].id.properties[0].key.type);
      assert.equal('a', ast.body[3].declarations[0].id.properties[0].key.name);

      assert.equal('Identifier', ast.body[3].declarations[0].id.properties[0].value.type);
      assert.equal('a', ast.body[3].declarations[0].id.properties[0].value.name);

      assert.equal('BindingRestElement', ast.body[3].declarations[0].id.properties[1].type);
      assert.equal('Identifier', ast.body[3].declarations[0].id.properties[1].id.type);
      assert.equal('b', ast.body[3].declarations[0].id.properties[1].id.name);

      assert.equal('Identifier', ast.body[3].declarations[0].init.type);
      assert.equal('c', ast.body[3].declarations[0].init.name);
      done();
    });
  });

});
