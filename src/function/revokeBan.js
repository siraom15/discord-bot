let revokeBan = (args, message) => {
    if ((message.member.hasPermission("ADMINISTRATOR"))) {
        if (args.length) {
            message.guild.members.unban(args[0])
                .then(user => { message.channel.send(`ปลดแบน ${user.username} แล้ว`) })
                .catch(console.error);
        } else {
            message.channel.send('กรุณาใส่ชื่อคนที่ต้องการแบนด้วย')
        }
    }
}

module.exports = revokeBan;