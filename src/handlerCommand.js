const functions = require('./commands/commands');
const { prefix } = require('../config.json');
let handlerCommand = (message, queue) => {
    const serverQueue = queue.get(message.guild.id);
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'คำสั่ง':
            functions.getAllCommand(message);
            break;
        case 'เซิฟ':
            functions.getServerInfo(message);
            break;
        case 'เชิญ':
            functions.getInviteLink(message, client_id);
            break;
        case 'สมาชิก':
            functions.getMemberCount(message);
            break;
        case 'ข้อมูล':
            functions.getUserData(message);
            break;
        case 'สวัสดี':
            functions.sayHi(message);
            break;
        case 'กินไรดี':
            functions.randomFood(message);
            break;
        case 'รูป':
            functions.getUserPic(message);
            break;
        case 'เตะ':
            functions.kickMember(args, message);
            break;
        case 'แบน':
            functions.banMember(args, message);
            break;
        case 'รายชื่อแบน':
            functions.getBanList(message);
            break;
        case 'ปลดแบน':
            functions.revokeBan(args, message);
            break;
        case 'ดูดวง':
            functions.getHoro(message);
            break;
        case 'เล่น':
            functions.setQueue(args, message, serverQueue, queue);
            break;
        case 'เพลง':
            functions.setQueue(args, message, serverQueue, queue);
            break;
        case 'ข้าม':
            functions.skipSong(message, serverQueue);
            break;
        case 'ออกไป':
            functions.disconnect(message, serverQueue, queue);
            break;
        case 'คิว':
            functions.showQueue(message, serverQueue, queue);
            break;
        case 'เสียง':
            functions.setVolumn(args, message, serverQueue);
            break;
        case 'ล้างคิว':
            functions.clearQueue(message, serverQueue)
            break;
        case 'ขนาด':
            functions.rateLong(message, args);
            break;
        case 'ประวัติ':
            functions.getAuditLog(message);
            break;
        case 'ลบ':
            functions.deleteSong(args, message, serverQueue)
            break;
        case 'เล่นวน':
            functions.setLoop(args, message, serverQueue, queue);
            break;
        case 'สลับคิว':
            functions.shuffleQueue(message, serverQueue);
            break;
        default:
            functions.handleCommonText(message);
            break;
    }
}

module.exports = handlerCommand;