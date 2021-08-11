module.exports = {
    name: 'clear',
    description: "Clear messaged!",
    async execute(client, message, args, DiscordJS) {
        if(!args[0]) return message.reply("Далбаёб укажи сколько почистить нада");
        if(isNaN(args[0])) return message.reply("Реальную цифру введи банан ёбаный");

        if(args[0] > 100) return message.reply("Больше 100 сообщений нельзя удалять а то ахуел");
        if(args[0] < 1) return message.reply("Блять с такими аргументами себя удали");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}