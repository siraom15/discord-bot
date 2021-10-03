const Discord = require('discord.js');
const { prefix, discord_bot_token, chatchannal } = require('../config.json');
const client = new Discord.Client();
const queue = new Map();
const handlerMessage = require('./handlerMessage')

client.once('ready', () => {
    client.user.setStatus('online')
    client.user.setActivity('พิมพ์ คำสั่ง เพื่อรับคำสั่งบอท')
    console.log('Bot running / บอททำงานแล้ว !!');
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

    handlerMessage(message, queue);

});

client.login(discord_bot_token);


