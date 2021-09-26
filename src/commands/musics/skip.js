let skip = (message, serverQueue) => {
    if (!message.member.voice.channel)
        return message.channel.send(
            "คุณต้องอยู่ในห้องสนทนาจึงจะข้ามเพลงได้ :smiling_face_with_3_hearts:  "
        );
    try {
        if (!serverQueue)
            return message.channel.send("```⛔ คิวยังว่างอยู่ ⛔ ```");
        serverQueue.connection.dispatcher.end();
    } catch (err) { }

}
module.exports = skip;