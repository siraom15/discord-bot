let showQueue = (message, serverQueue, queue) => {
    if (!serverQueue.songs) return message.channel.send(':pray: ไม่มีเพลงในคิว');
    console.log(serverQueue);
    const guild_id = message.guild.id;
    const queueInfo = queue.get(guild_id);
    const allSong = queueInfo.songs

    const Embed = {
        color: '#108AFC',
        title: `:heart_eyes: คิวเพลงใน ${message.guild.name} :heart_eyes: `,
        fields: [
            {
                name: ':play_pause: ขณะนี้กำลังเล่น',
                value: `${allSong[0].title}`,
            },
            {
                name: '\u200b',
                value: ':orange_square: คิวทั้งหมด :orange_square: ',
                inline: false,
            }
        ],
        timestamp: new Date(),
    };
    let i = 1;
    for (var key in allSong) {
        if (allSong.hasOwnProperty(key) & i <= 5) {
            Embed.fields.push({ name: '\u200b', value: i + " : " + allSong[key].title })
            i++;
        }
    }
    message.channel.send({ embed: Embed });
}
module.exports = showQueue