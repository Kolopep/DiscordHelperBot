module.exports = (DiscordJS, client, message) => {
    const prefix = '&';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    //Anti Spam Protection
    const antiSpam = require(`./antiSpam.js`);
    antiSpam.execute(DiscordJS, client, message);

    if(command)
    {
        command.execute(client, message, args, DiscordJS);
    }
    else
    {
        message.reply("Такой команды нет, а мб баг, похуй");
    }
}