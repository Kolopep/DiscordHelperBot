const DiscordJS = require('discord.js');
require('dotenv').config();
const fs = require('fs');

const client = new DiscordJS.Client();

client.commands = new DiscordJS.Collection();
client.events = new DiscordJS.Collection();


["command_handler", "event_handler"].forEach(handler => {
    require(`./handlers/${handler}`)(client, DiscordJS);
});

client.login(process.env.TOKEN);