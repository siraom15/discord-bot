let getPic = (message) => {
    !message.mentions.users.size
        ? message.reply(`รูปของคุณ`, { files: [message.author.displayAvatarURL({ format: "png", dynamic: true })] })
        : message.channel.send({ files: [...message.mentions.users.map(u => u.displayAvatarURL({ format: "png", dynamic: true }))] });
}
module.exports = getPic;

