let showQueue = (message, serverQueue, queue) => {
    if (!serverQueue) return message.channel.send('⛔ ไม่มีเพลงในคิว ⛔ \n✅ขอเพลงโดยใช้ `เล่น + ชื่อเพลง/link youtube` ได้นะ 😁');
    const guild_id = message.guild.id;
    const queueInfo = queue.get(guild_id);
    const allSong = queueInfo.songs;
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
                value: `:orange_square: คิวทั้งหมด ${allSong.length} เพลง :orange_square: `,
                inline: false,
            }
        ],
    };
    let i = 1;
    for (var key in allSong) {
        Embed.fields.push({ name: '\u200b', value: ` ${i++} : ${allSong[key].title} ขอโดย ${allSong[key].requestBy}` })
    }
    message.channel.send({ embed: Embed });
}
module.exports = showQueue