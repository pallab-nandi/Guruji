const { ask } = require("../config/openai");

async function ques(prompt) {
  if (prompt.content.includes('$tell')) {
    const ques = prompt.content.substring(6);
    const ans = await ask(ques);
    prompt.channel.send(ans);
  }
}

module.exports = { ques }