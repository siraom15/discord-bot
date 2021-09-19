let getMemberCount = (message) =>  message.channel.send(`สมาชิก : ${message.guild.memberCount} คน`);

module.exports = getMemberCount;