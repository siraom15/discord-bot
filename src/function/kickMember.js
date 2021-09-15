let kickMember = (args, message) => {
    if ((message.member.hasPermission("ADMINISTRATOR"))) {
        if (args.length) {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member
                        .kick('Optional reason that will display in the audit logs')
                        .then(() => {
                            message.reply(`เตะ ผู้ใช้ ${user.tag} ออกเรียบร้อยแล้ว`);
                        })
                        .catch(err => {
                            message.reply('ไม่สามารถเตะได้');
                        });
                }
            }
        } else {
            message.channel.send('กรุณาใส่ชื่อคนที่ต้องการเตะด้วย')
        }
    }
}
module.exports = kickMember;