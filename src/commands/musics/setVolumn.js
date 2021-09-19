let { owner_discord_id } = require('../../../config.json');
let setVolumn = (args, message, serverQueue) => {
    if (!message.member.voice.channel)
        return message.channel.send(
            "``` ❗❗❗ คุณต้องอยู่ในห้องสนทนาจึงจะสั่งลดเสียงได้ ❗❗❗```"
        );
    if (!args.length) return;
    if (isNaN(args[0])) return message.channel.send('``` ❗❗ กรุณากรอกตัวเลข 1️⃣2️⃣3️⃣ ❗❗```');
    if ((args[0] < 0 || args[0] > 100) && message.author.id != owner_discord_id) return message.channel.send('``` ❗❗ กรุณากรอกตัวเลขระหว่าง 1-100 ❗❗```');
    let volume = Math.floor(args[0]) / 100;
    try {
        serverQueue.connection.dispatcher.setVolume(volume);
        message.channel.send(`\`\`\`🔊🔊 ปรับเสียงเป็น ${Math.floor(args[0])} แล้ว 🔊🔊\`\`\``);
    } catch (err) {
    }

}
module.exports = setVolumn;