const fs = require('fs');
const embeds = require(`../../embeds.js`);
const rolesjson = require(`../../roles.json`).RoleReaction;

var roles = new Map();
for(var i = 0; i<rolesjson.emojiId.length; i++)
{
    roles.set(rolesjson.emojiId[i], rolesjson.roleId[i]);
}
module.exports = async (DiscordJS, client, messageReaction, user) => {
    let message = messageReaction.message;
    let guildoff = client.guilds.cache.get(`750746391743037481`);

    if(user === client.user) return;
    if(message.guild.id != guildoff.id) return;
    if(message.channel.id === rolesjson.channel)
    {
        for(var [emojiId, roleId]  of roles)
        {
            if(messageReaction.emoji.id === emojiId)
            {
                let member = guildoff.members.cache.get(user.id);
                member.roles.add(roleId);
                console.log(`Username: ${member.user.username} | UserId: ${member.user.id} | Role: ${guildoff.roles.cache.get(roleId).name} | Action: Add Role`);
            }
        }
    }
}