let getUserData = (message) => message.channel.send(`ชื่อ : ${message.author.username}\nID คือ : ${message.author.id}`);
module.exports = getUserData;