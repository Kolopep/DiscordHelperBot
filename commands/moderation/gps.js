module.exports = {
    name: 'gps',
    description: "ggg",
    async execute(client, message, args, DiscordJS) {
        if(message.channel.parent.id === "821771042396962856") return;
        if(message.member.user.id === "648912421234278401") return;
        console.log(`${message.member.user.id}`);
        let us = await client.users.fetch("648912421234278401");
        let guildmember = await client.guilds.cache.get(message.guild.id).members.cache.get(us.id);

        
        if(args[0] != "")
        {
            us = await client.users.fetch(args[0].slice(2).slice(0,-1));
            guildmember = await client.guilds.cache.get(message.guild.id).members.cache.get(us.id);
        }
        
        if(!guildmember.voice.channel) 
        {
            message.reply("Она не в войсе :(");
            return;
        }
        let channel;
        if(args[1] != "")
        {
            channel = await client.channels.fetch(args[1].slice(2).slice(0,-1));
        }
        console.log(channel);
        console.log(`${guildmember.username}`);

        await guildmember.voice.setChannel(channel);
        message.reply(`телепортировал долбаёба: <@${guildmember.user.id}> в <#${channel.id}>`);
    }
}