const DiscordJS = require('discord.js');
require('dotenv').config()

const client = new DiscordJS.Client();




/*client.on('message', (msg) =>{
    const embed = new DiscordJS.MessageEmbed()
    .setTitle('Роли')
    .setDescription('Тут вы можете получить роли ')
    .addFields(
        {name: 'Гендерные роли', value: `Мужицкая - <:male:866036740660527164> \nБабская - <:female:866036479473745922>`},
        {name: 'Игровые роли', value: 'CS:GO - <:csgo:866035185543544882>\nDota2 - <:dota2:866035768652857344>'},
        {name: 'Other', value: 'Роль абобы - <:bob:866033453383155733>'}
        );
        
        
        if(msg.content === 'ping')
        msg.channel.send(embed);
    });*/
    


    //ХУЛИ ЭТА ЗАЛУПА НЕ РАБОТАЕТ

    var guildMemberAddRoles = ["865944974956953620", "865939910673825792", "865939906509144075", "865942191594799164", "865940008665481216"];

    client.on('guildMemberAdd',  (member) =>{
        if(member.user.bot) return;
        member.send('qq');
        guildMemberAddRoles.forEach(c=>{
            member.roles.add(c);
        });
        console.log(`Username: ${member.user.username} | UserId ${member.user.id} | Action: GuildMemberAdd`);
    });
    
    
    client.on('messageReactionAdd', async (messageReaction, user) => {
        ReactionAdd(messageReaction, user);
    });
    
    client.on('messageReactionRemove', async (messageReaction, user) =>{
        ReactionRemove(messageReaction, user);
    });
    
    
    var roles = new Map();
    roles.set("866036740660527164", "864964758884843530"); //Male
    roles.set("866036479473745922", "864964750437777419"); //Female
    roles.set("866035185543544882", "865939701043298325"); //CS:GO
    roles.set("866035768652857344", "865939830923460629"); //Dota 2
    roles.set("866033453383155733", "866034045933584445"); //Aboba

    client.on('ready', async() => {
        const channel = client.channels.cache.get(`855558717586800670`);
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
            console.log(`..::${client.user.username} is ready::..`);
        }
    });
    
    function ReactionAdd(messageReaction, user)
    {
        let message = messageReaction.message;
        let guildoff = client.guilds.cache.get(`750746391743037481`);
        if(user === client.user) return;
        if(message.guild.id != guildoff.id) return;
        if(message.channel.id != "855558717586800670") return;
        if(message.id != "866090584326668289") return;
        for(var [emojiId, roleId] of roles)
    {
        if(messageReaction.emoji.id === emojiId)
        {
            let member = guildoff.members.cache.get(user.id);
            member.roles.add(roleId);
            console.log(`Username: ${member.user.username} | UserId: ${member.user.id} | Role: ${guildoff.roles.cache.get(roleId).name} | Action: Add Role`);
        }
    }

};

function ReactionRemove(messageReaction, user)
{
    let message = messageReaction.message;
    let guildoff = client.guilds.cache.get(`750746391743037481`);
    if(user === client.user) return;
    if(message.guild.id != guildoff.id) return;
    if(message.channel.id != "855558717586800670") return;
    if(message.id != "866090584326668289") return;

    for(var [emojiId, roleId] of roles)
    {
        if(messageReaction.emoji.id === emojiId)
        {
            let member = guildoff.members.cache.get(user.id);
            member.roles.remove(roleId);
            console.log(`Username: ${member.user.username} | UserId: ${member.user.id} | Role: ${guildoff.roles.cache.get(roleId).name} | Action: Remove Role`);
        }
    }
}

client.login(process.env.TOKEN);