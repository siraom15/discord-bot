const Discord = require('discord.js');
const { prefix, discord_bot_token, chatchannal, client_id } = require('../config.json');
const client = new Discord.Client();
const queue = new Map();
const functions = require('./function/functions');

client.once('ready', () => {
    client.user.setStatus('online')
    client.user.setActivity('พิมพ์ คำสั่ง เพื่อรับคำสั่งบอท')
    console.log('Bot running / บอททำงานแล้ว !!');
});
client.once('reconnecting', () => {
    console.log('เชื่อมต่อใหม่...');
});
client.once('disconnect', () => {
    console.log('ออกจาก Server');
});
client.on("guildCreate", guild => {
    guild.channels.create(chatchannal, { type: 'text' });
    console.log("สร้าง text channel สำหรับ Bot สำเร็จ เซิฟ : " + guild.name);
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === `${chatchannal}`);
    if (!channel) return;
    channel.send(`ยินดีต้อนรับเข้าสู่ Server : ${member.guild.name} , ${member}`);
});
client.on('message', async message => {
    if (!message.guild) return;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const serverQueue = queue.get(message.guild.id);

    switch (command) {
        case 'คำสั่ง':
            functions.getAllCommand(message);
            break;
        case 'เซิฟ':
            functions.getServerName(message);
            break;
        case 'เชิญ':
            functions.getInviteLink(message, client_id);
            break;
        case 'สมาชิก':
            functions.getMemberCount(message);
            break;
        case 'ข้อมูลฉัน':
            functions.getUserData(message);
            break;
        case 'สวัสดี':
            functions.sayHi(message);
            break;
        case 'กินไรดี':
            functions.randomFood(message);
            break;
        case 'รูป':
            functions.getPic(message);
            break;
        case 'เตะ':
            functions.kickMember(args, message);
            break;
        case 'แบน':
            functions.banMember(args, message);
            break;
        case 'รายชื่อแบน':
            functions.getBanList(message);
            break;
        case 'ปลดแบน':
            functions.revokeBan(args, message);
            break;
        case 'ดูดวง':
            functions.getHoro(message);
            break;
        case 'เล่น':
            functions.setQueue(args, message, serverQueue, queue);
            break;
        case 'เพลง':
            functions.setQueue(args, message, serverQueue, queue);
            break;
        case 'ข้าม':
            functions.skipSong(message, serverQueue);
            break;
        case 'ออกไป':
            functions.disconnect(message, serverQueue);
            break;
        case 'คิว':
            functions.showQueue(message, serverQueue, queue);
            break;
        case 'เสียง':
            functions.setVolumn(args, message, serverQueue);
            break;
        case 'ล้างคิว':
            functions.clearQueue(message,serverQueue)
            break;
        case 'ขนาด' :
            functions.rateLong(message,args);
        default:
            functions.handleCommonText(message);
            break;
    }
});

client.login(discord_bot_token);


