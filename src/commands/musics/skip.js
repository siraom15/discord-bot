let skip = (message, serverQueue) => {
    if (!message.member.voice.channel)
        return message.channel.send(
            "คุณต้องอยู่ในห้องสนทนาจึงจะข้ามเพลงได้ :smiling_face_with_3_hearts:  "
        );
    if (!serverQueue)
        return message.channel.send("คิวยังว่างอยู่ :laughing: ");
    serverQueue.connection.dispatcher.end();
}
module.exports = skip;