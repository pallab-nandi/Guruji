const embedInfo = {
  title: "Hi! This is Guruji. Your smart AI friend developed by @rubixcode",
  description: "I am here to help you with anything you like.\nYou want someone to chat with you or have some question in mind? Just ask me.\nOhh, I guess you want me to draw something for you!\nDon't worry I can do that too. Just follow the command!",
  color: 15161609,
  author: {
    name: "Myself Guruji",
    icon_url: "https://cdn.discordapp.com/avatars/1117398543028727838/a8cd83d46a65a35009596cf40537c961.webp?size=512"
  },
  thumbnail: {
    url: "https://cdn.discordapp.com/avatars/702946520734892193/f2f34750f315f16eef30d510c525bd0f.webp?size=512"
  },
  image: {
    url: "https://cdn.discordapp.com/avatars/1117398543028727838/a8cd83d46a65a35009596cf40537c961.webp?size=512"
  },
  timestamp: new Date().toISOString(),
  footer: {
    text: "Namaste! Just call me when you need."
  },
  fields: [
    {
      name: "Want to chat?",
      value: "```$tell <Your message>```"
    },
    {
      name: "Want something to draw for you?",
      value: "```$draw <imagine>```"
    },
    {
      name: "About me?",
      value: "```$info```"
    },
    {
      name: "Who made me?",
      value: "```I am glad that @rubixcode made me 😄```"
    }
  ]
}

function info(prompt) {
  if (prompt.content.includes('$info')) {
    prompt.channel.send({ embeds: [embedInfo] });
  }
}

module.exports = { info }