const { youtube_api } = require('../../../config.json');
const { YouTube } = require('popyt')
const youtube = new YouTube(youtube_api)
const ytdl = require('ytdl-core-discord');

let playSong = async (guild, song, queue) => {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    const dispatcher = await serverQueue.connection.play(await ytdl(song.url, { filter: format => ['251'], highWaterMark: 1 << 25 }), { type: 'opus' });
    await dispatcher
        .on("start", () => {
            let Songembed = {
                color: 0x0099ff,
                title: `:musical_note: : \` ${song.title} \``,
                url: `${song.url}`,
                author: {
                    name: 'ขณะนี้กำลังเล่น',
                },
                image: {
                    url: song.thumbnail,
                },
                timestamp: new Date(),
            };
            serverQueue.textChannel.send({ embed: Songembed });
        })
        .on("finish", () => {
            serverQueue.songs.shift();
            playSong(guild, serverQueue.songs[0], queue);
        })
        .on("error", error => console.error(error))
        .setVolume(0.2);
}

module.exports = playSong;