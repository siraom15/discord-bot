const getAllCommand = require('./bot/getAllCommand');
const getServerInfo = require('./server/getServerInfo');
const getInviteLink = require('./bot/getInviteLink')
const getMemberCount = require('./server/getMemberCount')
const getUserData = require('./user/getUserData')
const sayHi = require('./server/sayHi');
const randomFood = require('./other/randomFood');
const getUserPic = require('./user/getUserPic');
const kickMember = require('./server/kickMember');
const banMember = require('./server/banMember');
const getBanList = require("./server/getBanList");
const revokeBan = require("./server/revokeBan");
const getHoro = require('./other/getHoro');
const playSong = require('./musics/playSong')
const setQueue = require('./musics/setQueue');
const setVolumn = require('./musics/setVolumn');
const showQueue = require('./musics/showQueue');
const skipSong = require('./musics/skip');
const disconnect = require('./musics/disconnect');
const clearQueue = require('./musics/clearQueue')
const rateLong = require('./other/rateLong')
const handleCommonText = require('./handleCommonText')
const getAuditLog = require('./server/getAuditLog')
const deleteSong = require('./musics/deleteSong');
const setLoop = require('./musics/setLoop');
const shuffleQueue = require('./musics/shuffleQueue');
const getCheab = require('./other/getCheab');

module.exports = {
    getAllCommand,
    getServerInfo,
    getInviteLink,
    getMemberCount,
    getUserData,
    sayHi,
    randomFood,
    getUserPic,
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
    rateLong,
    handleCommonText,
    getAuditLog,
    deleteSong,
    setLoop,
    shuffleQueue,
    getCheab
}