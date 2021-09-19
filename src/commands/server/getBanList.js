let getBanList = (message) => {
    message.guild.fetchBans()
        .then(banned => {
            let list = "";
            banned.forEach(e => {
                console.log(e);
                list += `ชื่อผู้ใช้ : ${e.user.username}#${e.user.discriminator} (id : ${e.user.id}) เหตุผล : ${e.reason}\n`
            });
            message.channel.send(`\`\`\`โดนแบนทั้งหมด ${banned.size} บัญชี\n${list}\`\`\``);
        })
}
module.exports = getBanList;