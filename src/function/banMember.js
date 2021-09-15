let banMember = (args, message) => {
    if ((message.member.hasPermission("ADMINISTRATOR"))) {
        if (args.length) {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member
                        .ban({
                            reason: 'โดนแบนไม่มีเหตุผล',
                        })
                        .then(() => {
                            message.reply(`แบนผู้ใช้ ${user.tag} ออกเรียบร้อยแล้ว`);
                        })
                        .catch(err => {
                            message.reply('ไม่สามารถแบนได้');
                        });
                }
            }
        } else {
            message.channel.send('กรุณาใส่ชื่อคนที่ต้องการแบนด้วย')
        }
    }
}
module.exports = banMember;