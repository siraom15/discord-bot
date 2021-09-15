let hi = require('../data/hi')

let sayHi = (message) => message.channel.send(`${hi[Math.floor(Math.random() * hi.length)]} ${message.author.username} :pray: `);

module.exports = sayHi;