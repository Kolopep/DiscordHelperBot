module.exports = {
    name: 'ggdgsdfdsf',
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

        console.log(`${guildmember.username}`);
        if(!guildmember.voice.channel) 
        {
            message.reply("Она не в войсе :(");
            return;
        }

        var role= guildmember.guild.roles.cache.find(role => role.id === "1157293488921133136");
        guildmember.roles.remove(role);
        message.reply(`изгнал из чаехлёбов: <@${guildmember.user.id}> `);
    }
}