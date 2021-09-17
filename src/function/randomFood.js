let foods = require('../data/food')
let random = require('../utils/random');
let randomFood = (message) => message.channel.send(`งั้น... ${foods[random(0, foods.length - 1)]} ก็น่าสนใจนะ`)
module.exports = randomFood;