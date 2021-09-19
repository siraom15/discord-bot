let getBanList = require('./getBanList');
let revokeBan = (args, message) => {
    if ((message.member.hasPermission("ADMINISTRATOR"))) {
        if (args.length) {
            message.guild.members.unban(args[0])
                .then(user => { message.reply(`\`\`\`ปลดแบน ${user.username} แล้ว\`\`\``) })
                .catch(err=>{
                    message.reply(`\`\`\`เหมือนจะไม่มี ID นี้ในรายชื่อแบนนะ\`\`\``);
                });
        } else {
            message.channel.send('```กรุณาใส่ ID คนที่ต้องการปลดแบนด้วย\nปลดแบน + id```');
            getBanList(message);
        }
    }else {
        message.reply(`แกกกก ไม่มีสิทธิ์ !!!`, { files :['https://p.ptcdn.info/206/012/000/2638349_01434701901579410397_IMG-1289-PNG_l.jpg'] })
    }
    return;
}

module.exports = revokeBan;