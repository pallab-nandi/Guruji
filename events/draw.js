const { draw } = require("../config/openai");

async function imagine(prompt) {
  if (prompt.content.includes('$draw')) {
    prompt.channel.send(`Hey <@${prompt.author.id}> cutie! Could you please wait while your imagination is generating...`);
    const desc = prompt.content.substring(6);
    const ans = await draw(desc);
    prompt.reply(ans);
  }
}

module.exports = { imagine }