let hi = require('../data/hi')
let random = require('../utils/random')
let sayHi = (message) => message.channel.send(`${hi[random(0, hi.length - 1)]} ${message.author.username} :pray: `);

module.exports = sayHi;