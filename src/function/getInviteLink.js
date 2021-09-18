const Discord = require('discord.js');

let getInviteLink = (message, client_id) => {
    let url = `https://discord.com/oauth2/authorize?client_id=${client_id}&scope=bot&permissions=8`;

    return message.reply(`\`\`\`🔗Link เชิญบอท🔗\`\`\`${url}`);
}

module.exports = getInviteLink;