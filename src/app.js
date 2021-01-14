const Discord = require('discord.js');



const { prefix, discord_bot_token, chatchannal, youtube_api, client_id } = require('../config.json');
const { YouTube } = require('popyt')
const youtube = new YouTube(youtube_api)
const client = new Discord.Client();
const ytdl = require('ytdl-core-discord');
const queue = new Map();


client.once('ready', () => {
    console.log('พร้อม!');
    client.user.setStatus('online')
    client.user.setActivity('พิมพ์ คำสั่ง เพื่อรับคำสั่งบอท')

});
client.once('reconnecting', () => {
    console.log('กำลังเชื่อมต่อใหม่...');
});
client.once('disconnect', () => {
    console.log('ออกจากเซิฟเวอร์');
});
client.on("guildCreate", guild => {
    guild.channels.create(chatchannal, { type: 'text' });
    console.log("สร้าง text channel สำหรับ Bot สำเร็จ เซิฟ : " + guild.name);
});
client.on('message', async message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content === 'test') {
    }
    if (message.content === 'คำสั่ง') {

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
    if (!message.guild) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const serverQueue = queue.get(message.guild.id);

    if (command === 'เซิฟ') {
        message.channel.send(`เซิฟเวอร์นี้ชื่อ : ${message.guild.name}`);
    }
    else if (command === 'เชิญ') {
        message.channel.send(`Link เชิญบอท : https://discord.com/oauth2/authorize?client_id=${client_id}&scope=bot&permissions=8`);
    }
    else if (command === 'สมาชิก') {
        message.channel.send(`สมาชิก : ${message.guild.memberCount} คน`);
    }
    else if (command === 'ข้อมูลฉัน') {
        message.channel.send(`ชื่อ : ${message.author.username}\nID ของนายท่าน : ${message.author.id}`);
    }
    else if (command === 'สวัสดี') {
        message.channel.send(`สวัสดี ${message.author.username}`);
    }
    else if (command === 'กินไรดี') {
        let data = require('./data/food')
        // console.log(food.food);
        const random = data.food[Math.floor(Math.random() * data.food.length)];
        message.channel.send(`งั้น... ${random} ก็น่าสนใจนะ`)
    }
    else if (command === 'หิว') {
        message.channel.send('ไปกินข้าวกับเราไหม :)');
    }
    else if (command === 'เตะะ') {
        const taggedUser = message.mentions.users.first();

        message.channel.send(`อยากเตะ${taggedUser.username} เหมือนกัน`);
    }
    else if (command === 'รูปโปรไฟล์') {
        if (!message.mentions.users.size) {
            return message.channel.send(`รูปของคุณ: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `รูปของ ${user.username}: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });

        message.channel.send(avatarList);
    }
    else if (command === 'เตะ') {
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
                                message.reply('ไม่สามารถเตะ ได้');
                                console.error(err);
                            });
                    }
                }
            } else {
                message.channel.send('กรุณาใส่ชื่อคนที่ต้องการเตะด้วย')
            }
        }
    }
    else if (command === 'แบน') {
        if ((message.member.hasPermission("ADMINISTRATOR"))) {
            if (args.length) {
                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {
                        member
                            .ban('Optional reason that will display in the audit logs')
                            .then(() => {
                                message.reply(`แบน ผู้ใช้ ${user.tag} ออกเรียบร้อยแล้ว`);
                            })
                            .catch(err => {
                                message.reply('ไม่สามารถแบน ได้');
                                console.error(err);
                            });
                    }
                }
            } else {
                message.channel.send('กรุณาใส่ชื่อคนที่ต้องการแบนด้วย')
            }
        }
    }
    else if (command === 'รายชื่อแบน') {
        message.guild.fetchBans()
            .then(banned => {
                let list = "";
                banned.forEach(element => {
                    list += "ชื่อผู้ใช้ : " + element.user.username + "#" + element.user.discriminator + " (id : " + element.user.id + ")" + "\n"
                });
                message.channel.send(`**โดนแบนทั้งหมด ${banned.size} บัญชี **: \n${list}`);
            })
            .catch(console.error);
    }
    else if (command === 'ปลดแบน') {
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
    else if (command === 'ดูดวง') {
        let now = new Date();
        let thday = new Array("อาทิตย์", "จันทร์",
            "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์");
        let thmonth = new Array("มกราคม", "กุมภาพันธ์", "มีนาคม",
            "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน",
            "ตุลาคม", "พฤศจิกายน", "ธันวาคม");

        let dateStr = "วัน" + thday[now.getDay()] + "ที่ " + now.getDate() + " " +
            thmonth[now.getMonth()];
        function createStar(i) {
            let star = ""
            for (j = 0; j < i; j++) {
                star += "⭐"
            }
            return star
        }
        function random5() {
            return Math.floor(Math.random() * 5) + 1
        }
        let horo = {
            color: 0x0099ff,
            title: `ดวงประจำวันที่ : ${dateStr} `,
            author: {
                name: 'Bot ดูดวง',
            },
            fields: [
                {
                    name: 'ความรัก',
                    value: createStar(random5()),
                    inline: true,
                },
                {
                    name: 'การงาน',
                    value: createStar(random5()),

                    inline: true,
                },
                {
                    name: 'สุขภาพ',
                    value: createStar(random5()),

                    inline: true,
                },
            ],
            timestamp: new Date(),

        };
        message.reply({ embed: horo });
    }
    else if (command === 'ด่า') {
        if (args.length) {
            const user = message.mentions.users.first();
            if (user) {
                message.channel.send("ไอ้ต้าวน่ารัก "+"<@" + user.id + ">");
            }
        }

    }
    //ส่วนของเพลง
    else if (command === 'เล่น') {
        if (!message.member.voice.channel) {
            return message.channel.send(`:worried: กรุณาเข้าห้องแชทด้วยเสียงก่อน `);
        }
        if (!args.length) {
            return message.channel.send(`:worried: โปรดใส่ url เพลง`);
        }
        setQueue(args, message, serverQueue);
        return;
    }
    else if (command === 'ข้าม') {
        skip(message, serverQueue);
        return;
    }
    else if (command === 'ออกไป') {
        leave(message, serverQueue);
        message.reply("ออกก็ได้ :pleading_face: ")
        return;
    }
    else if (command === 'คิว') {
        showQueue(message, serverQueue);
        return;
    }
    else if (command === 'เสียง') {
        setVolumn(args, message, serverQueue);
        return;
    }

});

//function เพลง
async function setQueue(args, message, serverQueue) {
    // รับ Url / ชื่อเพลง
    if (args[0].substring(0, 4) !== "http") {
        let name = args.join().split(',').join(' ').trim();
        // name = encodeURI(name);
        try {
            message.channel.send(`:mag_right: กำลังค้นหา : \` ${name} \``);
            const searchInfo = await youtube.getVideo(name)
            url = searchInfo.url;
        } catch (err) {
            if (err) console.log(err);
            message.channel.send(`:frowning2:  ไม่พบ : \`${name} กรุณาลองใหม่\``);
            return;
        }
    } else {
        url = args[0].trim();
    }

    //หา ข้อมูลเพลง
    const songInfo = await ytdl.getBasicInfo(url);
    const song = {
        "title": songInfo.videoDetails.title,
        "url": songInfo.videoDetails.video_url,
        "thumbnail": 'https://i.ytimg.com/vi/' + songInfo.videoDetails.videoId + '/maxresdefault.jpg'
    }
    console.log(song);
    //เช็คว่า server นี้มี คิวหรือยัง ถ้าไม่มีให้สรา้ง ถ้ามีให้เพิ่มเข้าคิว
    if (!serverQueue) {
        // สร้าง connection
        const voiceChannel = message.member.voice.channel;
        //สร้างรูปแบบของคิว
        const queueConstructor = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        }

        //เพิมรูปแบบ และ id server เข้าคิว

        queue.set(message.guild.id, queueConstructor);

        // เพิ่มเพลงเข้าคิว

        queueConstructor.songs.push(song);

        // เช็คว่า connect channel ได้ไหม

        try {
            // เข้า channal
            let connection = await voiceChannel.join();
            // เพิ่ม connection เข้า รูปแบบ
            queueConstructor.connection = connection;
            // เล่นเพลง คิวที่ 1
            playSong(message.guild, queueConstructor.songs[0]);

        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id);
            return message.channel.send(err);
        }

    }
    // ถ้ามีคิวอยู่แล้ว เพิ่มเข้าคิว 
    else {
        serverQueue.songs.push(song);
        return message.channel.send(`:grin: \`${song.title}  \`ถูกเพิ่มเข้าคิวแล้ว `);

    }



}
async function playSong(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(song);
    const dispatcher = await serverQueue.connection.play(await ytdl(song.url, { filter: format => ['251'], highWaterMark: 1 << 25 }), { type: 'opus' });
    // const dispatcher = await serverQueue.connection.play(await ytdl(song.url), { type: 'opus' });
    await dispatcher
        .on("start", () => {
            let Songembed = {
                color: 0x0099ff,
                title: `:musical_note: : \` ${song.title} \``,
                url: `${song.url}`,
                author: {
                    name: 'ขณะนี้กำลังเล่น',
                },
                image: {
                    url: song.thumbnail,
                },
                timestamp: new Date(),

            };
            serverQueue.textChannel.send({ embed: Songembed });
            // serverQueue.textChannel.send(`:grinning: ขณะนี้กำลังเล่น : \` ${song.title} \``);
            // serverQueue.textChannel.send(`${song.url}`);
        })
        .on("finish", () => {
            serverQueue.songs.shift();
            playSong(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error))
        .setVolume(0.2);
}
function skip(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send(
            "คุณต้องอยู่ในห้องสนทนาจึงจะข้ามเพลงได้ :smiling_face_with_3_hearts:  "
        );
    if (!serverQueue)
        return message.channel.send("คิวยังว่างอยู่ :laughing: ");
    serverQueue.connection.dispatcher.end();

}
function leave(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send(
            "คุณต้องอยู่ในห้องสนทนาจึงจะสั่ง เตะฉันได้ :triumph: "
        );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}
function showQueue(message, serverQueue) {
    if (!serverQueue) return message.channel.send(':pray: ไม่มีเพลงในคิว');
    const guild_id = message.guild.id;
    const queueInfo = queue.get(guild_id);
    const allSong = queueInfo.songs

    const Embed = {
        color: '#108AFC',
        title: `:heart_eyes: คิวเพลงใน ${message.guild.name} :heart_eyes: `,
        fields: [
            {
                name: ':play_pause: ขณะนี้กำลังเล่น',
                value: `${allSong[0].title}`,
            },
            {
                name: '\u200b',
                value: ':orange_square: คิวทั้งหมด :orange_square: ',
                inline: false,
            }
        ],
        timestamp: new Date(),
        //         footer: {
        //             text: `Source code: 
        //             text: `Source code: 
        //             text: `Source code: 
        //             text: `Source code: 
        //             text: `Source code: 
        // github.com/siraom15/discord-bot`,
        //             icon_url: 'https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png'
        //         },
    };
    let i = 1;
    for (var key in allSong) {
        if (allSong.hasOwnProperty(key) & i <= 5) {
            Embed.fields.push({ name: '\u200b', value: i + " : " + allSong[key].title })
            i++;
        }
    }
    message.channel.send({ embed: Embed });

}
function setVolumn(args, message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send(
            "คุณต้องอยู่ในห้องสนทนาจึงจะสั่งลดเสียงได้ :triumph: "
        );
    if (!args.length) return;
    if (isNaN(args[0])) return message.channel.send('กรุณากรอกตัวเลข :triumph:');
    if (args[0] < 0 || args[0] > 100) return message.channel.send('กรุณากรอกตัวเลข 1-100  :triumph:');
    let volume = args[0] / 100;
    serverQueue.connection.dispatcher.setVolume(volume);
    message.channel.send(`ปรับเสียงเป็น ${args[0]} แล้ว :smiley:`);
}


// ทักทายสมาชิกใหม่
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === `${chatchannal}`);
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`ยินดีต้อนรับเข้าสู่ Server : ${member.guild.name} , ${member}`);
});


client.login(discord_bot_token);


