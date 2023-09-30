module.exports = {
    name: 'muteZalupa',
    description: "ggg",
    async execute(client, message, args, DiscordJS) {
        if(message.channel.parent.id === "821771042396962856") return;
        if(message.member.user.id === "648912421234278401") return;
        let us = await client.users.fetch("295879696543907850");
        us.voice.disconnect();
    }
}