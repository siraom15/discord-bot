let setLoop = (message, serverQueue, queue) => {
    if (!message.member.voice.channel)
        return message.channel.send(
            "``` ❗❗❗ คุณต้องอยู่ในห้องสนทนาจึงจะสั่งเล่นวนได้ ❗❗❗```"
        );
    try {
        serverQueue.loop = !serverQueue.loop;
        message.channel.send(`\`\`\`🔁🔁 สถานะเล่นวนเพลงในคิว ${serverQueue.loop ? 'เปิดอยู่' : 'ปิดอยู่'} 🔁🔁 \`\`\``);
    } catch (err) {}

}
module.exports = setLoop;