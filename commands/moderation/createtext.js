module.exports = {
    name: 'createtext',
    description: "ggg",
    async execute(client, message, args, DiscordJS) {
        let everyoneRole = message.guild.roles.cache.find(r=>r.name === "@everyone");
        let myRole = message.guild.roles.cache.find(r=>r.id === "1153724928349192243");
        message.guild.channels.create("╠☕╣Чаехлёбная", {
            typeof: 'voice',
            parent: '800719321893699636',
            permissionOverwrites: [
                {
                    id: everyoneRole.id,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id:  myRole.id,
                    allow: ["VIEW_CHANNEL"],
                }
            ]
        });
    }
}