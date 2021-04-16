import * as Discord from 'discord.js'
import * as dotenv from 'dotenv'

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  msg.channel.type
});

dotenv.config()
const token = process.env['DISCORD_TOKEN']
client.login(token);