let getUserPic = (message) => {
    if (!message.mentions.users.size) {
        return message.reply(`รูปของคุณ`, { files: [message.author.displayAvatarURL({ format: "png", dynamic: true })] });
    } else {
        return message.channel.send({ files: [...message.mentions.users.map(u => u.displayAvatarURL({ format: "png", dynamic: true }))] });
    }
}
module.exports = getUserPic;

