let leave = (message, serverQueue) => {
    if (!message.member.voice.channel)
        return message.channel.send(
            "คุณต้องอยู่ในห้องสนทนาจึงจะสั่ง เตะฉันได้ :triumph: "
        );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}
module.exports = leave;