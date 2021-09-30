let shuffle = require('../../utils/shuffle');
const showQueue = require('./showQueue');

let shuffleQueue = (message, serverQueue) => {
    if (!message.member.voice.channel)
        return message.channel.send(
            "คุณต้องอยู่ในห้องสนทนาจึงจะสั่งสลับคิวได้ :triumph: "
        );
    try {
        let temp = serverQueue.songs;
        let result = shuffle(temp.slice(1));
        serverQueue.songs = [temp[0], ...result];
        message.channel.send(
            "```สลับคิวเรียบร้อย ✅```"
        );
        return showQueue(message, serverQueue);
    } catch (err) { }

}

module.exports = shuffleQueue;