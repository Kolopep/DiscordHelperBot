const gamingRoleJSON = require(`../../roles.json`).gameEmojiId;
module.exports = (DiscordJS, client) => {
    once: true;
    console.log(`..::${client.user.tag} is ready::..`);
    const channel = client.channels.cache.get(`855558717586800670`);
    let temp = false;

    if(channel)
    {
        const fetchedChannels = [channel];
        fetchedChannels.forEach(c => {
            for(let role of gamingRoleJSON)
            {
                c.messages.fetch("875506373792780308").then(msg => msg.react(role));
            }
        });
        temp = true;
    }

    console.log(`message react: ${temp}`);
};