module.exports = (DiscordJS, client) => {
    once: true;
    console.log(`..::${client.user.tag} is ready::..`);
    const channel = client.channels.cache.get(`855558717586800670`);
        let temp = false;
        if(channel)
        {
            const fetchedChannels = [channel];
            fetchedChannels.forEach(c => {
                c.messages.fetch(`866090584326668289`).then(msg => msg.react('<:male:866036740660527164>'));
                c.messages.fetch(`866090584326668289`).then(msg => msg.react('<:female:866036479473745922>'));
                c.messages.fetch(`866090584326668289`).then(msg => msg.react('<:csgo:866035185543544882>'));
                c.messages.fetch(`866090584326668289`).then(msg => msg.react('<:dota2:866035768652857344>'));
                c.messages.fetch(`866090584326668289`).then(msg => msg.react('<:bob:866033453383155733>'));
            });
            temp = true;
        }
        console.log(`message react: ${temp}`);
};