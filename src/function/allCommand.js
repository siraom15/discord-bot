const Discord = require('discord.js');
let getAllCommand = (message) => {
    const Embed = {
        color: 0x0099ff,
        title: 'คำสั่งทั้งหมด',
        fields: [
            {
                name: '\u200b',
                value: '\u200b',
                inline: false,
            },
            {
                name: 'เกี่ยวกับเพลง',
                value: '`เล่น + Url เพลง` , `เล่น + ชื่อเพลง` , `ข้าม => ข้ามเพลงต่อไป` , `คิว => แสดงคิวทั้งหมด`, `ออกไป => บอท disconnect ออก` , `เสียง + เลข(1-100) => ปรับความดังของเสียงเพลง` ',
            },
            {
                name: '\u200b',
                value: '\u200b',
                inline: false,
            },
            {
                name: 'เกี่ยวกับเซิฟเวอร์',
                value: '`เซิฟ => แสดงชื่อเซิฟเวอร์`, `สมาชิก => แสดงจำนวนสมาชิก` \n`ข้อมูลฉัน => แสดงข้อมูลของฉัน` , `รูปโปรไฟล์ + @mention => แสดง url ของรูปโปรไฟล์` \n`เตะ + @mention => เตะสมาชิก (เฉพาะ Admin)`, \n`แบน + @mention => แบนสมาชิก (เฉพาะ Admin)` , `รายชื่อแบน => แสดงรายชื่อสมาชิกที่ถูกแบน`, `ปลดแบน + id => ปลดแบนโดยใช้ id จากฟังก์ชัน รายชื่อแบน` ',
                inline: true,
            },
            {
                name: '\u200b',
                value: '\u200b',
                inline: false,
            },
            {
                name: 'อื่นๆ',
                value: '`กินไรดี => สุ่มชื่ออาหาร`',
                inline: true,
            },
        ],

    };
    if (!message.guild) {
        message.author.send({ embed: Embed })

    } else {
        message.channel.send('ส่งให้ใน direct message แล้ว :heart_eyes: ')
        message.author.send({ embed: Embed })
    }
}

module.exports = getAllCommand;