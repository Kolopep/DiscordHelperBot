const DiscordJS = require('discord.js');
require('dotenv').config()

const client = new DiscordJS.Client();

client.on('ready', () =>{
    console.log('Bot Ready');
});

client.login(process.env.TOKEN);