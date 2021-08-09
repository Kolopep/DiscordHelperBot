module.exports = {
    name: "message",
    once: true,
    execute(msg, client) {
        if(msg.content === "ping")
            msg.channel.send("pong");
    }
};