const { ask } = require("../config/openai");

async function ques(prompt) {
  if (prompt.content.substring(0, 4).toLowerCase() === "$ask") {
    const ques = prompt.content.substring(5);
    const ans = await ask(ques);
    prompt.channel.send(ans);
  }
}

module.exports = { ques }