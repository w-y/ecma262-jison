var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('jsx', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/jsx.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('jsx element', function() {
    it('element and text', function(done) {
      assert.equal('JSXElement', ast.body[0].expression.type);

      assert.equal('JSXOpeningElement', ast.body[0].expression.openingElement.type);
      assert.equal('JSXIdentifier', ast.body[0].expression.openingElement.name.type);
      assert.equal('Dropdown', ast.body[0].expression.openingElement.name.name);

      assert.equal('JSXOpeningElement', ast.body[0].expression.closingElement.type);
      assert.equal('JSXIdentifier', ast.body[0].expression.closingElement.name.type);
      assert.equal('Dropdown', ast.body[0].expression.closingElement.name.name);

      assert.equal('Literal', ast.body[0].expression.children[0].type);
      assert.equal('A dropdown list', ast.body[0].expression.children[0].value.trim());

      assert.equal('JSXElement', ast.body[0].expression.children[1].type);
      assert.equal('Menu', ast.body[0].expression.children[1].openingElement.name.name);
      assert.equal('Literal', ast.body[0].expression.children[1].children[0].type);

      assert.equal('JSXElement', ast.body[0].expression.children[1].children[1].type);
      assert.equal('JSXIdentifier', ast.body[0].expression.children[1].children[1].openingElement.name.type);
      assert.equal('MenuItem', ast.body[0].expression.children[1].children[1].openingElement.name.name);

      assert.equal('Literal', ast.body[0].expression.children[1].children[1].children[0].type);
      assert.equal('Do Something', ast.body[0].expression.children[1].children[1].children[0].value);
      assert.equal('Do Something Fun!', ast.body[0].expression.children[1].children[3].children[0].value);
      assert.equal('Do Something Else', ast.body[0].expression.children[1].children[5].children[0].value);
      done();
    });
  });

  describe('attributes', function() {
    it('{ exp }', function(done) {
      assert.equal('JSXElement', ast.body[1].expression.type);
      assert.equal('Box', ast.body[1].expression.openingElement.name.name);

      assert.equal('JSXExpressionContainer', ast.body[1].expression.children[1].type);
      assert.equal('JSXElement', ast.body[1].expression.children[1].expression.type);
      assert.equal('Answer', ast.body[1].expression.children[1].expression.openingElement.name.name);
      assert.equal(true, ast.body[1].expression.children[1].expression.openingElement.selfClosing);
      assert.equal(1, ast.body[1].expression.children[1].expression.openingElement.attributes.length);

      assert.equal('value', ast.body[1].expression.children[1].expression.openingElement.attributes[0].name.name);
      assert.equal(false, ast.body[1].expression.children[1].expression.openingElement.attributes[0].value.value);

      done();
    });

    it('attributes and spread', function(done) {
      assert.equal('JSXElement', ast.body[1].expression.children[3].type);
      assert.equal('JSXMemberExpression', ast.body[1].expression.children[3].openingElement.name.type);
      assert.equal('Box', ast.body[1].expression.children[3].openingElement.name.object.name);
      assert.equal('Comment', ast.body[1].expression.children[3].openingElement.name.property.name);

      assert.equal(2, ast.body[1].expression.children[3].openingElement.attributes.length);

      assert.equal('JSXSpreadAttribute', ast.body[1].expression.children[3].openingElement.attributes[0].type);
      assert.equal('props', ast.body[1].expression.children[3].openingElement.attributes[0].argument.name);

      assert.equal('JSXAttribute', ast.body[1].expression.children[3].openingElement.attributes[1].type);
      assert.equal('content', ast.body[1].expression.children[3].openingElement.attributes[1].name.name);

      assert.equal('Literal', ast.body[1].expression.children[3].openingElement.attributes[1].value.type);
      assert.equal('Text Content', ast.body[1].expression.children[3].openingElement.attributes[1].value.value);

      assert.equal(3, ast.body[1].expression.children[3].children.length);
      assert.equal('JSXExpressionContainer', ast.body[1].expression.children[3].children[1].type);
      assert.equal('Identifier', ast.body[1].expression.children[3].children[1].expression.type);
      assert.equal('tip', ast.body[1].expression.children[3].children[1].expression.name);

      assert.equal('ExpressionStatement', ast.body[2].type);
      assert.equal('JSXElement', ast.body[2].expression.type);

      assert.equal('JSXOpeningElement', ast.body[2].expression.openingElement.type);
      assert.equal('JSXIdentifier', ast.body[2].expression.openingElement.name.type);
      assert.equal('Link', ast.body[2].expression.openingElement.name.name);

      assert.equal(1, ast.body[2].expression.openingElement.attributes.length);
      assert.equal('JSXAttribute', ast.body[2].expression.openingElement.attributes[0].type);
      assert.equal('JSXIdentifier', ast.body[2].expression.openingElement.attributes[0].name.type);
      assert.equal('to', ast.body[2].expression.openingElement.attributes[0].name.name);
      assert.equal('TemplateLiteral', ast.body[2].expression.openingElement.attributes[0].value.type);

      assert.equal('TemplateElement', ast.body[2].expression.openingElement.attributes[0].value.quasis[0].type);
      assert.equal('TemplateElement', ast.body[2].expression.openingElement.attributes[0].value.quasis[1].type);
      assert.equal('', ast.body[2].expression.openingElement.attributes[0].value.quasis[0].value);
      assert.equal('', ast.body[2].expression.openingElement.attributes[0].value.quasis[1].value);

      assert.equal('Identifier', ast.body[2].expression.openingElement.attributes[0].value.expressions[0].type);
      assert.equal('url', ast.body[2].expression.openingElement.attributes[0].value.expressions[0].name);
      
      assert.equal(false, ast.body[2].expression.openingElement.selfClosing);

      assert.equal('JSXOpeningElement', ast.body[2].expression.closingElement.type);
      assert.equal('JSXIdentifier', ast.body[2].expression.closingElement.name.type);
      assert.equal('Link', ast.body[2].expression.closingElement.name.name);
      
      assert.equal('JSXExpressionContainer', ast.body[2].expression.children[0].type);
      assert.equal('Identifier', ast.body[2].expression.children[0].expression.type);
      assert.equal('label', ast.body[2].expression.children[0].expression.name);

      done();
    });

  });
});
