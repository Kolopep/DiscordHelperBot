module.exports = {
    name: "play",
    description: "play music from youtube links",
    async execute(client, msg, args, DiscordJS) {

            let VOICE_CHANNEL = '000';

            let message = context.params.event.content;
            let searchString = message.split(' ').slice(1).join(' ');

            try {
            let youtubeLink;
            if (!searchString) {
                return lib.discord.channels['@0.3.0'].messages.create({
                channel_id: `${context.params.event.channel_id}`,
                content: `No search string provided!`,
                });
            }
            if (!searchString.includes('youtube.com')) {
                let results = await ytSearch(searchString);
                if (!results ? .all ? .length) {
                return lib.discord.channels['@0.3.0'].messages.create({
                    channel_id: `${context.params.event.channel_id}`,
                    content: `No results found for your search string. Please try a different one.`,
                });
                }
                youtubeLink = results.all[0].url;
            } else {
                youtubeLink = searchString;
            }
            let downloadInfo = await ytdl.getInfo(youtubeLink);
            await lib.discord.voice['@0.0.1'].tracks.play({
                channel_id: `${VOICE_CHANNEL}`,
                guild_id: `${context.params.event.guild_id}`,
                download_info: downloadInfo
            });
            return lib.discord.channels['@0.3.0'].messages.create({
                channel_id: `${context.params.event.channel_id}`,
                content: `Now playing **${downloadInfo.videoDetails.title}**`,
            });
            } 
            catch (e) {
            return lib.discord.channels['@0.3.0'].messages.create({
                channel_id: `${context.params.event.channel_id}`,
                content: `Failed to play track!`,
            });
            }
    }
}
