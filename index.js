const { Client, Events, GatewayIntentBits } = require('discord.js');
const { TOKEN } = require('./config/token');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
  ]
})

client.once(Events.ClientReady, bot => {
  console.log(`The ${bot.user.tag} is ready to go!`);
})

client.on(Events.MessageCreate, msg => {
  if (msg.content === "$test") {
    msg.reply("The bot is running fine!");
  }
})

client.login(TOKEN);