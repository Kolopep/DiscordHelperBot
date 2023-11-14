const antiSpam = require(`../../antiSpam.js`);

module.exports = (DiscordJS, client, message) => {
    
    //Anti Spam Protection
    antiSpam.execute(DiscordJS, client, message);
    
    const prefix = '&';
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    let guildmember = client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id);

    if(!guildmember.roles.cache.some(role=>role.id === "1153724928349192243"))
    {
        message.reply(`ты не Чаехлёб идинаху`);
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    
    if(command)
    {
        command.execute(client, message, args, DiscordJS);
    }
    else
    {
        message.reply("Такой команды нет, а мб баг, похуй");
    }
    
}