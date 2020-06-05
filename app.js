const Discord = require('discord.js');

const { prefix, token, chatchannal } = require('./config.json');
const client = new Discord.Client();
const yts = require('yt-search')
const ytdl = require('ytdl-core-discord');

async function play(connection, url) {
    connection.play(await ytdl(url), { type: 'opus' });
}

client.once('ready', () => {
    console.log('พร้อม!');

});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (!message.guild) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'เซิฟ') {
        message.channel.send(`เซิฟเวอร์นี้ชื่อ : ${message.guild.name}`);
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
    else if (command === 'เล่น') {
        if (message.member.voice.channel) {
            if (!args.length) {
                return message.channel.send(`โปรดใส่ url เพลงค่ะ`);
            } else {
                let url = args[0].trim();
                connection = await message.member.voice.channel.join();
                if (url.substring(0, 4) == "http") {
                    play(connection, url);
                    ytdl.getInfo(url, (err, info) => {
                        message.channel.send(`:grinning: ได้ค่ะ ขณะนี้กำลังเล่น : \` ${info.title} \``);
                    });
                } else {
                    let name = args.join().split(',').join(' ').trim();

                    yts(name, function (err, r) {

                        const videos = r.videos
                        message.channel.send(`:mag_right: กำลังค้นหา : ${name}`);
                        let result_url = videos[0].url;

                        play(connection, result_url);

                        ytdl.getInfo(result_url, (err, info) => {
                            console.log(info.title);
                            message.channel.send(`:grinning: ได้ค่ะ ขณะนี้กำลังเล่น : \` ${info.title} \``);
                        });
                    })
                }
            }
        } else {
            message.reply('คุณต้องเข้า แชทด้วยเสียงก่อนค่ะ');
        }
    }
    else if (command === 'ออกไป') {
        connection.disconnect()
    }
    else if (command === 'เข้ามา') {
        if (message.member.voice.channel) {
            connection = await message.member.voice.channel.join();
            message.channel.send('มีอะไรที่เรียกหรอคะ?');
        }
    }
    
    //  ส่วนของ admin
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
});

// ทักทายสมาชิกใหม่
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === `${chatchannal}`);
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`ยินดีต้อนรับเข้าสู่ Server : ${member.guild.name} ค่ะ, ${member}`);
});
client.login(token);


