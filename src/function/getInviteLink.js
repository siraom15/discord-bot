const Discord = require('discord.js');

let getInviteLink = (message, client_id) => {
    let url = `https://discord.com/oauth2/authorize?client_id=${client_id}&scope=bot&permissions=8`;

    const button = new Discord.MessageButton()
        .setLabel('LINK')
        .setStyle('LINK')
        .url(url)
    return message.reply(`\`\`\`🔗Link เชิญบอท🔗 https://discord.com/oauth2/authorize?client_id=${client_id}&scope=bot&permissions=8\`\`\``, { button: button });
}

module.exports = getInviteLink;