const roleEmbed = require(`../../embeds.js`).rolePickEmbed;
module.exports = {
    name: "pickroleembed",
    description: "Send Embed in Channel",
    async execute(client, msg, args, DiscordJS) {
        msg.channel.send(roleEmbed);
    }
}