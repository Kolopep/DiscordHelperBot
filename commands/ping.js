module.exports = {
    name: "ping",
    description: "Replies with Pong!",
    async execute(msg) {
        msg.channel.send('Pong!');
    }
}