const { Client, Events, GatewayIntentBits } = require('discord.js');
const { TOKEN } = require('./config/token');

const chat = require('./events/chat');
const draw = require('./events/draw');
const desc = require('./events/info');

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

// client.on(Events.MessageCreate, msg => {
//   if (msg.content === "$test") {
//     msg.reply("The bot is running fine!");
//   }
// })

//chatting system
client.on(Events.MessageCreate, chat.ques);

//image system
client.on(Events.MessageCreate, draw.imagine);

//info system
client.on(Events.MessageCreate, desc.info);

client.login(TOKEN);