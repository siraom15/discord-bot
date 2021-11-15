const fetch = require('node-fetch');
let getCat = async (message) => {
  try {
    const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
    let data = await fetch(catApiUrl);
    let json = await data.json();
    let catPicUrl = json[0].url;
    message.reply({ files :[catPicUrl] });
  } catch (e) {}
};
getCat();
module.exports = getCat;
