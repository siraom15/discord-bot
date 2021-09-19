let getUserData = (message) => {
    let userInfoEmbed = null;
    if (!message.mentions.users.size) {
        userInfoEmbed = {
            color: 0x0099ff,
            title: `ข้อมูลเกี่ยวกับ ${message.author.username}`,
            thumbnail: {
                url: `${message.author.displayAvatarURL()}`,
            },
            fields: [
                {
                    name: `ชื่อ`,
                    value: `${message.author.username}#${message.author.discriminator}`,
                    inline: true,
                },
                {
                    name: `ไอดี`,
                    value: `${message.author.id}`,
                    inline: true,
                },
                {
                    name: `สมัครวันที่`,
                    value: ` ${message.author.createdAt.toLocaleDateString('th-TH', {
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
        return message.reply({ embed: userInfoEmbed });
    } else {
        let mentionUser = [...message.mentions.users][0][1];
        userInfoEmbed = {
            color: 0x0099ff,
            title: `ข้อมูลเกี่ยวกับ ${mentionUser.username}`,
            thumbnail: {
                url: `${mentionUser.displayAvatarURL()}`,
            },
            fields: [
                {
                    name: `ชื่อ`,
                    value: `${mentionUser.username}#${mentionUser.discriminator}`,
                    inline: true,
                },
                {
                    name: `ไอดี`,
                    value: `${mentionUser.id}`,
                    inline: true,
                },
                {
                    name: `สมัครวันที่`,
                    value: ` ${mentionUser.createdAt.toLocaleDateString('th-TH', {
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
        return message.channel.send({ embed: userInfoEmbed });
    }
}

module.exports = getUserData;