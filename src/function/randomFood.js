let foods = require('../data/food')
let randomFood = (message) => message.channel.send(`งั้น... ${foods[Math.floor(Math.random() * foods.length)]} ก็น่าสนใจนะ`)
module.exports = randomFood;