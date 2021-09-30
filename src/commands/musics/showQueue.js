const { isBotInVoiceChannel } = require('./utils/functions');

let showQueue = (message, serverQueue) => {
    if (!serverQueue || !isBotInVoiceChannel(message)) return message.channel.send('```⛔ ไม่มีเพลงในคิว ⛔ \n✅ขอเพลงโดยใช้ เล่น + ชื่อเพลง/link youtube ได้นะ 😁```');
    const allSong = serverQueue.songs;
    const Embed = {
        color: '#4B8F7F',
        title: ` 🎶 คิวเพลงใน ${message.guild.name} 🎶`,
        fields: [
            {
                name: ':play_pause: ขณะนี้กำลังเล่น',
                value: `${allSong[0].title} ขอโดย ${allSong[0].requestBy}`,
            },
            {
                name: '\u200b',
                value: `🎵 คิวทั้งหมด ${allSong.length} เพลง 🎵 `,
                inline: false,
            }
        ],
    };
    let i = 1;
    for (let key in allSong) {
        Embed.fields.push({ name: '\u200b', value: ` ${i++} : ${allSong[key].title} ขอโดย ${allSong[key].requestBy}` })
    }
    Embed.fields.push({
        name: `🔁🔁 เล่นวนเพลงในคิว ${serverQueue.loop ? 'เปิดอยู่ ✅' : 'ปิดอยู่ ❌'}🔁🔁`,
        value: '\u200b',
    })
    message.channel.send({ embed: Embed });
}
module.exports = showQueue