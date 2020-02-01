const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'star') {
    msg.reply('twinkle twinkle little star..');
  }
});

client.login('token');
