const Discord = require('discord.js');



const { prefix, discord_bot_token, chatchannal, youtube_api } = require('../config.json');
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
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
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
            message.channel.send('ส่งให้ใน direct message แล้วค่ะ :heart_eyes: ')
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
        message.channel.send(`Link เชิญบอท : https://discord.com/oauth2/authorize?client_id=718169475777822841&scope=bot&permissions=8`);
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
        let food = ["กะหรี่ปั๊บ", "แกงบอน", "แกงป่า", "แกงเขียวหวาน", "แกงไตปลา", "แกงส้ม", "แกงเผ็ดเป็ดย่าง", "แกงเลียง", "แกงมัสมั่น", "แกงเหลือง", "แกงเทโพ", "แกงจืด", "แกงโฮะ", "กุนเชียง", "แกงไก่", "กุ้งพริกไทย", "กุ้งชุบแป้งทอด", "กุ้งแช่น้ำปลา", "ไก่อบพริกไทยดำ", "แกงกะหรี่ไก่", "ขนมจีน", "ข้าวคลุกกะปิ", "ข้าวผัดสับปะรด", "ข้าวมันไก่", "ข้าวยำ", "ข้าวห่อใบบัว", "ไข่เจียว", "ไข่ต้ม", "ไข่ลูกเขย", "ไข่พะโล้หมูสามชั้น", "ข้าวแช", "ต้มยำ", "ต้มยำแซบ", "ต้มข่า", "ต้มจืด", "ผัดกระเพรา", "ผัดขี้เมา", "ผัดไท", "ผัดซีอิ้ว", "ผัดฉ่า", "ผัดวุ้นเส้น", "ผักบุ้งไฟแดง", "ผักคะน้าปลาเค็ม", "ส้มตำ", "สุกีไทย", "ลาบ", "ราดหน้า", "ห่อหมก", "ปลาร้าทรงเครื่อง", "ปลาราดพริก", "พะแนง", "พะแนงไก่", "พล่าเนื้อ", "ยำใหญ่", "ยำทวาย", "แหนม", "ปูจ๋า", "ปูนิ่มผัดพริกไทดำ", "ตำผลไม้", "บะหมี่หมูแดง", "หมูกะทะ", "หอยหลอดผัดฉ่า", "ไก่ต้มน้ำปลา", "ไก่อบฟาง", "ไก่ทอดน้ำปลา", "ปลากระพงทอดน้ำปลา", "งบปลา", "คั่วกลิ้งหมู", "หลนปูเค็ม", "แจงลอน", "หรุ่ม", "ล่าเตียง", "สาคูไส้หมู", "ปลาทับทิมลุยสวน", "แกงเทโพหมู", "ผัดกระเพราหมู"];
        const random = food[Math.floor(Math.random() * food.length)];
        message.channel.send(`งั้น... ${random} ก็น่าสนใจนะ`)
    }
    else if (command === 'หิว') {
        message.channel.send('ไปกินข้าวกับเราไหม :)');
    }
    else if (command === 'เตะะ') {
        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
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

        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
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
                                message.reply(`เตะ ผู้ใช้ ${user.tag} ออกเรียบร้อยแล้วค่ะ`);
                            })
                            .catch(err => {
                                message.reply('ไม่สามารถเตะ ได้ค่ะ');
                                console.error(err);
                            });
                    }
                }
            } else {
                message.channel.send('กรุณาใส่ชื่อคนที่ต้องการเตะด้วยค่ะ')
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
                                message.reply(`แบน ผู้ใช้ ${user.tag} ออกเรียบร้อยแล้วค่ะ`);
                            })
                            .catch(err => {
                                message.reply('ไม่สามารถแบน ได้ค่ะ');
                                console.error(err);
                            });
                    }
                }
            } else {
                message.channel.send('กรุณาใส่ชื่อคนที่ต้องการแบนด้วยค่ะ')
            }
        }
    }
    else if (command === 'รายชื่อแบน') {
        message.guild.fetchBans()
            .then(banned => {
                let list = "";
                banned.forEach(element => {
                    list += "ชื่อผู้ใช้ : " + element.user.username+"#"+element.user.discriminator + " (id : " + element.user.id + ")" + "\n"
                });
                message.channel.send(`**โดนแบนทั้งหมด ${banned.size} บัญชี **: \n${list}`);
            })
            .catch(console.error);
    }
    else if (command === 'ปลดแบน') {
        if ((message.member.hasPermission("ADMINISTRATOR"))) {
            if (args.length) {
                message.guild.members.unban(args[0])
                    .then(user => { message.channel.send(`ปลดแบน ${user.username} แล้วค่ะ`) })
                    .catch(console.error);
            } else {
                message.channel.send('กรุณาใส่ชื่อคนที่ต้องการแบนด้วยค่ะ')
            }
        }
    }

    //ส่วนของเพลง
    else if (command === 'เล่น') {
        if (!message.member.voice.channel) {
            return message.channel.send(`:worried: กรุณาเข้าห้องแชทด้วยเสียงก่อนค่ะ `);
        }
        if (!args.length) {
            return message.channel.send(`:worried: โปรดใส่ url เพลงค่ะ`);
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
        try {
            message.channel.send(`:mag_right: กำลังค้นหา : \` ${name} \``);
            const searchInfo = await youtube.getVideo(name)
            url = searchInfo.url;
        } catch (err) {
            if (err) console.log(err);
            message.channel.send(`:frowning2:  ไม่พบ : \`${name} กรุณาลองใหม่ค่ะ\``);
            return;
        }
    } else {
        url = args[0].trim();
    }

    //หา ข้อมูลเพลง
    const songInfo = await ytdl.getInfo(url);

    const song = {
        "title": songInfo.title,
        "url": songInfo.video_url,
        "thumbnail": 'https://i.ytimg.com/vi/'+songInfo.video_id+'/maxresdefault.jpg'
    }

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
        return message.channel.send(`:grin: \`${song.title}  \`ถูกเพิ่มเข้าคิวแล้วค่ะ `);

    }



}
async function playSong(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    const dispatcher = serverQueue.connection.play(await ytdl(song.url, { filter: format => ['251'], highWaterMark: 1 << 25 }), { type: 'opus' });
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
            "คุณต้องอยู่ในห้องสนทนาจึงจะข้ามเพลงได้ค่ะ :smiling_face_with_3_hearts:  "
        );
    if (!serverQueue)
        return message.channel.send("คิวยังว่างอยู่ค่ะ :laughing: ");
    serverQueue.connection.dispatcher.end();

}
function leave(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send(
            "คุณต้องอยู่ในห้องสนทนาจึงจะสั่ง เตะฉันได้ค่ะ :triumph: "
        );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}
function showQueue(message, serverQueue) {
    if (!serverQueue) return message.channel.send(':pray: ไม่มีเพลงในคิวค่ะ');
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
// github.com/siraom15/discord-bot`,
//             icon_url: 'https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png'
//         },
    };
    let i = 1;
    for (var key in allSong) {
        if (allSong.hasOwnProperty(key) & i <= 5) {
            Embed.fields.push({ name: '\u200b', value: i+" : "+allSong[key].title })
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
    if (isNaN(args[0])) return message.channel.send('กรุณากรอกตัวเลขค่ะ :triumph:');
    let volume = args[0] / 100;
    serverQueue.connection.dispatcher.setVolume(volume);
    message.channel.send(`ปรับเสียงเป็น ${args[0]} แล้วค่ะ :smiley:`);
}


// ทักทายสมาชิกใหม่
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === `${chatchannal}`);
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`ยินดีต้อนรับเข้าสู่ Server : ${member.guild.name} ค่ะ, ${member}`);
});


client.login(discord_bot_token);


