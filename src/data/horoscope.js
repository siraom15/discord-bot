let love = random5()
let work = random5()
let health = random5()

function random5() {
    return Math.floor(Math.random() * 5) + 1
}

module.exports.love = love
module.exports.work = work
module.exports.health = health