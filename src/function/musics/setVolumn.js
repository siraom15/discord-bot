let setVolumn = (args, message, serverQueue) => {
    if (!message.member.voice.channel)
        return message.channel.send(
            "คุณต้องอยู่ในห้องสนทนาจึงจะสั่งลดเสียงได้ :triumph: "
        );
    if (!args.length) return;
    if (isNaN(args[0])) return message.channel.send('กรุณากรอกตัวเลข :triumph:');
    if ((args[0] < 0 || args[0] > 100) && message.author.id != '301299192716853248') return message.channel.send('กรุณากรอกตัวเลข 1-100  :triumph:');
    let volume = args[0] / 100;
    try {
        serverQueue.connection.dispatcher.setVolume(volume);
        message.channel.send(`ปรับเสียงเป็น ${args[0]} แล้ว :smiley:`);
    }catch(err){
        console.log(err);
    }

}
module.exports = setVolumn;