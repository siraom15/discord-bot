let commonText = require("../data/commonText");
const random = require("../utils/random");
let handleCommonText = (message) => {
  for (const m in commonText) {
    if (message.content.includes(m)) {
      if (random(0, 1) === 0) {
        return message.channel.send(commonText[m]);
      }
    }
  }
};

module.exports = handleCommonText;
