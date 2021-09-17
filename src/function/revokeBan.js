let revokeBan = (args, message) => {
    if ((message.member.hasPermission("ADMINISTRATOR"))) {
        if (args.length) {
            message.guild.members.unban(args[0])
                .then(user => { message.channel.send(`ปลดแบน ${user.username} แล้ว`) })
                .catch(console.error);
        } else {
            message.channel.send('กรุณาใส่ชื่อคนที่ต้องการแบนด้วย')
        }
    }else {
        message.reply(`แกกกก ไม่มีสิทธิ์ !!!`, { files :['https://p.ptcdn.info/206/012/000/2638349_01434701901579410397_IMG-1289-PNG_l.jpg'] })
    }
}

module.exports = revokeBan;