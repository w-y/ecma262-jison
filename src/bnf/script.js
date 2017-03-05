const ScriptBody = require('./scriptbody');

const Script = {
  conditions: [''],
  name: 'Script',
  rules: [
    `${ScriptBody.name}`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    ScriptBody,
  ]
}

module.exports = Script;
