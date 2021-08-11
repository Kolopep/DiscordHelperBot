module.exports = {
    async execute(DiscordJS, client, message) {

        try
        {
            
            if(message.member.joinedAt > new Date(2021, 7, 8, 17, 38) && message.member.joinedAt < new Date(2021, 7, 8, 17, 43))
            {
                console.log(`Joined At: ${message.member.joinedAt} | User: ${message.member.user.username}${message.member.user.tag} | Content: ${message.content} | DELETE`);
                message.delete();
            }
        }
        catch
        {   
            console.log('Error');
        }
    }
}