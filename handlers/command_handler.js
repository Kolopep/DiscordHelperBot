const fs = require('fs');

module.exports = (client, DiscordJS) => {
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for (const file of command_files){
        const command = require(`../commands`)
    }
}