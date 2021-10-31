let getAllCommand = (message) => {
    const Embed = {
        color: "#4b8f7f",
        title: 'คำสั่งทั้งหมด',
        fields: [
            {
                name: 'เกี่ยวกับเพลง 🎵',
                value: 'เล่น/เพลง + Url เพลง\nเล่น/เพลง + ชื่อเพลง\nข้าม => ข้ามไปเพลงต่อไปในคิว\nคิว => แสดงคิวเพลงทั้งหมด\nลบ + เลขคิว => ลบเพลงนั้นออกจากคิว\nสลับคิว => สลับคิวเพลง\nเสียง + เลข(1-100) => ปรับความดังของเสียงเพลง\nเล่นวน + เปิด/ปิด => เปลี่ยนสถานะเล่นวนซ้ำในคิว\nออกไป => Disconnect บอท',
            },
            {
                name: '\u200b',
                value: '\u200b',
                inline: false,
            },
            {
                name: 'เกี่ยวกับเซิฟเวอร์ 🖥',
                value: 'เซิฟ => แสดงชื่อเซิฟเวอร์\nสมาชิก => แสดงจำนวนสมาชิก\nข้อมูล => แสดงข้อมูลของคุณ\nข้อมูล + @mention => แสดงข้อมูลของคนที่ถูก mention\nรูป => แสดงรูปโปรไฟล์\nรูป + @mention => แสดงรูปโปรไฟล์ของคนที่ถูก Mention\nเตะ + @mention => เตะสมาชิก (เฉพาะ Admin)\nแบน + @mention => แบนสมาชิก (เฉพาะ Admin)\nรายชื่อแบน => แสดงรายชื่อสมาชิกที่ถูกแบน\nปลดแบน + id => ปลดแบนโดยใช้ id จากฟังก์ชัน รายชื่อแบน ',
                inline: true,
            },
            {
                name: '\u200b',
                value: '\u200b',
                inline: false,
            },
            {
                name: 'อื่นๆ 😀',
                value: 'กินไรดี => สุ่มชื่ออาหาร\nดูดวง => ดูดวงประจำวัน\nขนาด (+@mention) => เช็คขนาดน้องของคนที่ถูก mention อิอิ\nคำคม => ขอคำคม\nโควิด => สถานะการโควิดในไทยวันนี้\nสีมงคล => แสดงสีมงคล',
                inline: true,
            },
        ],

    };
    if (!message.guild) {
        message.author.send({ embed: Embed })

    } else {
        message.reply('```ส่งให้ใน Direct Message 📫 แล้ว ```')
        message.author.send({ embed: Embed })
    }
}

module.exports = getAllCommand;