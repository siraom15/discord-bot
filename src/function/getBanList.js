let getBanList = (message) => {
    message.guild.fetchBans()
        .then(banned => {
            let list = "```";
            banned.forEach(element => {
                list += "ชื่อผู้ใช้ : " + element.user.username + "#" + element.user.discriminator + " (id : " + element.user.id + ")" + "\n"
            });
            list += "```"
            message.channel.send(`**โดนแบนทั้งหมด ${banned.size} บัญชี **: \n${list}`);
            
        })
}
module.exports = getBanList;