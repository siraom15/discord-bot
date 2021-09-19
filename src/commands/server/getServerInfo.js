let getServerInfo = (message) => {
    let serverEmbed = {
        color: 0x0099ff,
        title: `ข้อมูลเกี่ยวกับเซิฟเวอร์ ${message.guild.name}`,
        thumbnail: {
            url: `${message.guild.iconURL()}`,
        },
        fields: [
            {
                name: `ชื่อ`,
                value: `${message.guild.name}`,
                inline: true,
            },
            {
                name: `จำนวนสมาชิก`,
                value: `${message.guild.memberCount}`,
                inline: true
            },
            {
                name: `เซิฟเวอร์`,
                value: ` ${message.guild.region}`,
                inline: true,
            },
            {
                name: `สร้างวันที่`,
                value: ` ${message.guild.createdAt.toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long',
                })
                    }`,
                inline: true,
            },

        ],

    };
    return message.channel.send({ embed: serverEmbed });
}

module.exports = getServerInfo;