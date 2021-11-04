const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Database = require("easy-json-database");
const mySecret = process.env['token']

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on('!ping', msg => { msg.reply('pong!');
});

client.on('messageCreate', async (message) => {
  if ((message.content) == '/dailyverse') {
    message.channel.send(String('Hey Biblebot, whats the dailyverse?'));
    message.channel.send(String('+dailyverse'));
  }

});


client.login('ODg4ODQ4MTEyMTIxMTg0MzQ4.YUYqTw.ps4UR8eXcR9qXbIPDOQZVMA6puI');

