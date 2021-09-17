let random = require('../utils/random')
let rateLong = (message, args) => {
    let str = "8";
    let length = random(1,30);
    for (let index = 0; index < length; index++) str += "="
    str += "D"
    if (!message.mentions.users.size) {
        return message.reply(`\`\`\`ขนาดน้องของ ${message.author.username}\n${str} (${length} นิ้ว)\`\`\``);
    } else {
        let name = [...message.mentions.users][0][1].username   
        return message.channel.send(`\`\`\`ขนาดน้องของ ${name} ❤❤\n${str} (${length} นิ้ว)\`\`\``);
    }
}
module.exports = rateLong;