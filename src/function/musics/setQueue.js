const { youtube_api } = require('../../../config.json');
const { YouTube } = require('popyt')
const youtube = new YouTube(youtube_api)
const ytdl = require('ytdl-core-discord');
const playSong = require('./playSong');

let setQueue = async (args, message, serverQueue, queue) => {
    // รับ Url / ชื่อเพลง
    if (!args.length) return message.reply("ใส่ชื่อเพลงด้วยนะ หรือลิ้งค์ Youtube ก็ได้นะ");
    if (args[0].substring(0, 4) !== "http") {
        let name = args.join(" ").trim();
        try {
            message.channel.send(`:mag_right: กำลังค้นหา : \` ${name} \``);
            const searchInfo = await youtube.getVideo(name)
            url = searchInfo.url;
        } catch (err) {
            console.log(err);
            message.channel.send(`:frowning2: ไม่พบ : \`${name} กรุณาลองใหม่\``);
            return;
        }
    } else {
        url = args[0].trim();
    }

    const songInfo = await ytdl.getBasicInfo(url);
    const song = {
        "title": songInfo.videoDetails.title,
        "url": songInfo.videoDetails.video_url,
        "thumbnail": 'https://i.ytimg.com/vi/' + songInfo.videoDetails.videoId + '/maxresdefault.jpg',
        "requestBy": `${message.author.username}#${message.author.discriminator}`,
        "moreInfo" : songInfo.videoDetails
    }
    if (!serverQueue) {
        const voiceChannel = message.member.voice.channel;
        const queueConstructor = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        }
        queue.set(message.guild.id, queueConstructor);
        queueConstructor.songs.push(song);
        try {
            let connection = await voiceChannel.join();
            queueConstructor.connection = connection;
            playSong(message.guild, queueConstructor.songs[0], queue);

        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id);
            return message.channel.send(err);
        }
    }
    else {
        serverQueue.songs.push(song);
        return message.channel.send(`:grin: \`${song.title}\`ถูกเพิ่มเข้าคิวแล้ว ขอโดย ${song.requestBy}`);
    }
}
module.exports = setQueue;