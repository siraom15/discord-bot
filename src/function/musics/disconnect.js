let leave = (message, serverQueue) => {
    if (!message.member.voice.channel)
        return message.reply(
            "คุณต้องอยู่ในห้องสนทนาจึงจะสั่งเตะได้ :triumph: ",
            { files: ['https://p.ptcdn.info/206/012/000/2638349_01434701901579410397_IMG-1289-PNG_l.jpg'] }
        );
    try {
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    } catch (err) {
        console.log(err);
    }

}
module.exports = leave;