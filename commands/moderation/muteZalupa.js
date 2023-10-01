module.exports = {
    name: 'killzxc',
    description: "ggg",
    async execute(client, message, args, DiscordJS) {
        if(message.channel.parent.id === "821771042396962856") return;
        if(message.member.user.id === "648912421234278401") return;
        console.log(`${message.member.user.id}`);
        let us = await client.users.fetch("648912421234278401");
        let guildmember = await client.guilds.cache.get(message.guild.id).members.cache.get(us.id);


        console.log(`${guildmember.username}`);
        if(!guildmember.voice.channel) 
        {
            message.reply("Она не в войсе :(");
            return;
        }

        await guildmember.voice.kick();
        message.reply(`убил нефора: <@${guildmember.user.id}> `);
    }
}