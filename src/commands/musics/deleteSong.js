let deleteSong = (args, message, serverQueue) => {

    if (!args.length) return message.channel.send('``` ❗❗ ลบ + คิวเพลง เพื่อลบเพลงในคิวนั้น ❗❗```');
    if (isNaN(args[0])) return message.channel.send('``` ❗❗ กรุณากรอกตัวเลข 1️⃣2️⃣3️⃣ ❗❗```');
    if (!serverQueue) return message.channel.send('``` ❗❗ ไม่มีเพลงในคิว ❗❗```');
    try {
        let songToRemove = parseInt(args[0]) - 1;
        let queueLen = serverQueue.songs.length;
        if (songToRemove < 0 && songToRemove > queueLen - 1) return message.channel.send('``` ❗❗ ลบไม่ได้ ไม่มีคิวนี้/กำลังเล่นเพลงนี้อยู่ ❗❗```');
        let temp = serverQueue.songs[songToRemove];
        serverQueue.songs.splice(songToRemove, 1)
        return message.channel.send(`\`\`\`✅ ลบ ${temp.title} สำเร็จ\`\`\``);
    } catch (err) {
    }
}

module.exports = deleteSong;