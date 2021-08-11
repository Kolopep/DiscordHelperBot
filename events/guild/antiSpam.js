module.exports = {
    async execute(DiscordJS, client, msg) {

        try
        {
            
            if(msg.member.joinedAt > new Date(2021, 7, 8, 17, 38) && msg.member.joinedAt < new Date(2021, 7, 8, 17, 43))
            {
                console.log(`Joined At: ${msg.member.joinedAt} | User: ${msg.member.user.username}${msg.member.user.tag} | Content: ${msg.content} | DELETE`);
                msg.delete();
            }
        }
        catch
        {   
            console.log('Error');
        }
    }
}