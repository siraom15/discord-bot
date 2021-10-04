let setLoop = (args, message, serverQueue) => {
    if (!message.member.voice.channel)
        return message.channel.send(
            "``` ❗❗❗ คุณต้องอยู่ในห้องสนทนาจึงจะสั่งเล่นวนได้ ❗❗❗```"
        );
    try {
        if (!args.length) return message.channel.send('``` ❗❗ เล่นวน + เปิด/ปิด => เปลี่ยนสถานะเล่นวนซ้ำในคิว ❗❗```');
        if (args[0] == 'เปิด') {
            serverQueue.loop = true;
        } else if (args[0] == 'ปิด') {
            serverQueue.loop = false;
        } else {
            return message.channel.send('``` ❗❗ เล่นวน + เปิด/ปิด => เปลี่ยนสถานะเล่นวนซ้ำในคิว ❗❗```');
        }
        message.channel.send(`\`\`\`🔁 สถานะเล่นวนเพลงในคิว ${serverQueue.loop ? 'เปิดอยู่ ✅' : 'ปิดอยู่ ❌'} \`\`\``);
    } catch (err) { }

}
module.exports = setLoop;