const DiscordJS = require("discord.js");
module.exports = {
    rolePickEmbed : new DiscordJS.MessageEmbed()
    .setTitle('Роли')
    .setDescription('Тут вы можете получить роли ')
    .addFields(
        {name: 'Гендерные роли', value: `Мужицкая - <:male:866036740660527164> \nБабская - <:female:866036479473745922>`},
        {name: 'Игровые роли', value: "CS:GO - <:csgo:866035185543544882>\nDota2 - <:dota2:866035768652857344>\nWarzone - <:warzone:875496205227012187>\nBrawl Stars - <:BrawlStars:875496635344490506>\nGarry's Mode - <:garrys:875495428341264444>"},
        {name: 'Other', value: 'Роль абобы - <:bob:866033453383155733>'},
        ),
        
        
        
    subPickEmbed : new DiscordJS.MessageEmbed()
        .setTitle('Подписки')
        .setDescription('Вы можете подписаться на интересующие вас каналы')
        .addField(
            {name: 'Test', value: 'test'}
        )
}