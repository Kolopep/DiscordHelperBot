module.exports = {
    name: "ping",
    description: "Replies with Pong!",
    async execute(client, msg, args, DiscordJS) {
        msg.channel.send('Pong!');
    }
}