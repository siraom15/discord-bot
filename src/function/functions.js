const getAllCommand = require('./allCommand');
const help = require('./help');
const getServerName = require('./serverName');
const getInviteLink = require('./getInviteLink')
const getMemberCount = require('./getMemberCount')
const getUserData = require('./getUserData')
const sayHi = require('./sayHi');
const randomFood = require('./randomFood');
const getPic = require('./getPic');
const kickMember = require('./kickMember');
const banMember =require('./banMember');
const getBanList = require("./getBanList");
const revokeBan = require("./revokeBan");
const getHoro = require('./getHoro');
const playSong = require('./musics/playSong')
const setQueue = require('./musics/setQueue');
const setVolumn = require('./musics/setVolumn');
const showQueue = require('./musics/showQueue');
const skipSong = require('./musics/skip');
const disconnect = require('./musics/disconnect');
const clearQueue = require('./musics/clearQueue')
// const runJs = require('./runJs');
module.exports = {
    getAllCommand,
    help,
    getServerName,
    getInviteLink,
    getMemberCount,
    getUserData,
    sayHi,
    randomFood,
    getPic,
    kickMember,
    banMember,
    getBanList,
    revokeBan,
    getHoro,
    playSong,
    setQueue,
    setVolumn,
    showQueue,
    skipSong,
    disconnect,
    clearQueue,
    // runJs
}