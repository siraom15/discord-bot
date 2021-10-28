const fetch = require('node-fetch');
let random = require('../../utils/random');
let getCheab = async (message) => {
    const cheabUrl = 'https://raw.githubusercontent.com/narze/awesome-cheab-quotes/main/README.md';
    let data = await fetch(cheabUrl);
    let resp = await data.text();
    let cheabs = resp.match(/-(.*)\[/ig).slice(1).map(e => e.slice(2, -2));
    message.reply(cheabs[random(0, cheabs.length - 1)]);
}
module.exports = getCheab;