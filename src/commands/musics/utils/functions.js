let isBotInVoiceChannel = (message) => {
    return message.guild.me.voice.channel ? true : false;
}

module.exports = {
    isBotInVoiceChannel
}