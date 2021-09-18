let getInviteLink = (message, client_id) => message.channel.send(`\`\`\`🔗Link เชิญบอท : https://discord.com/oauth2/authorize?client_id=${client_id}&scope=bot&permissions=8\`\`\``);

module.exports = getInviteLink;