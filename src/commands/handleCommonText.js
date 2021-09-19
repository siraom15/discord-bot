let commonText = require("../data/commonText")

let handleCommonText = (message) => {
    for (const m in commonText) {
        if (message.content.includes(m)) {
            return message.channel.send(commonText[m]);
        }
    }
}

module.exports = handleCommonText;