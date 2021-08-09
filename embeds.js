const DiscordJS = require("discord.js");

const rolePickEmbed = new DiscordJS.MessageEmbed()
    .setTitle('Роли')
    .setDescription('Тут вы можете получить роли ')
    .addFields(
        {name: 'Гендерные роли', value: `Мужицкая - <:male:866036740660527164> \nБабская - <:female:866036479473745922>`},
        {name: 'Игровые роли', value: 'CS:GO - <:csgo:866035185543544882>\nDota2 - <:dota2:866035768652857344>'},
        {name: 'Other', value: 'Роль абобы - <:bob:866033453383155733>'}
    );
        
        
        
const subPickEmbed = new DiscordJS.MessageEmbed()
    .setTitle('Подписки')
    .setDescription('Вы можете подписаться на интересующие вас каналы')
    .addField(
            {name: 'Test', value: 'test'}
    );