let clearQueue = (message, serverQueue) =>{
    serverQueue.songs = [];
    message.reply("🧹 ล้างคิวเรียบร้อย")
}

module.exports = clearQueue;