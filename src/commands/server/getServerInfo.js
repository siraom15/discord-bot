let getServerInfo = (message) => {
    return message.channel.send(`\`\`\`เซิฟเวอร์นี้ชื่อ 🖥 : ${message.guild.name}\`\`\``);
}

module.exports = getServerInfo;