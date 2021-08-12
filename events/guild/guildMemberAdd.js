module.exports = (DiscordJS, client, member) => {
    if(member.user.bot) return;
    
    member.send("qq");
    const roles = require('../../roles.json')
    for(const role of roles.starterRoles)
    {
        member.roles.add(role);
    }
}