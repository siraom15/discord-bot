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
                color: "#4b8f7f",
                title: `:musical_note: :  ${song.title}`,
                url: `${song.url}`,
                author: {
                    name: 'ขณะนี้กำลังเล่น 🎵🎵🎵',
                },
                image: {
                    url: song.thumbnail,
                },
                fields: [
                    {
                        name: ':pencil2: ขอโดย 👤➕',
                        value: `${song.requestBy}`,
                    },
                    {
                        name: 'ความยาวเพลง ⌚⏳',
                        value: `${Math.floor(song.moreInfo.lengthSeconds / 60)}:${song.moreInfo.lengthSeconds - (60 * Math.floor(song.moreInfo.lengthSeconds / 60))}`,
                        inline: true,
                    },
                    {
                        name: 'Channel',
                        value: `${song.moreInfo.ownerChannelName}`,
                        inline: true,
                    },
                ],
                footer: {
                    text: 'Enjoy Music - aommie bot',
                },
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