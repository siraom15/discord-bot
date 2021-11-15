const fetch = require('node-fetch');
let getDog = async (message) => {
  try {
    const dogApiUrl = 'https://dog.ceo/api/breeds/image/random';
    let data = await fetch(dogApiUrl);
    let json = await data.json();
    let dogPicUrl = json.message;
    message.reply({ files :[dogPicUrl] });
  } catch (e) {}
};
module.exports = getDog;
