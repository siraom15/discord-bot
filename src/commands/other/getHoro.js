let random = require('../../utils/random');

let getHoro = (message) => {
    let now = new Date();
    let thday = new Array("อาทิตย์", "จันทร์",
        "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์");
    let thmonth = new Array("มกราคม", "กุมภาพันธ์", "มีนาคม",
        "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน",
        "ตุลาคม", "พฤศจิกายน", "ธันวาคม");

    let dateStr = "วัน" + thday[now.getDay()] + "ที่ " + now.getDate() + " " +
        thmonth[now.getMonth()];
    function createStar(i) {
        let star = ""
        for (j = 0; j < i; j++) {
            star += "⭐"
        }
        return star
    }

    let horo = {
        color: '#FFFF00',
        title: `ดวงประจำวันที่ : ${dateStr} `,
        author: {
            name: 'Bot ดูดวง',
        },
        fields: [
            {
                name: 'ความรัก',
                value: createStar(random(1,6)),
            },
            {
                name: 'การงาน',
                value: createStar(random(1,6)),
            },
            {
                name: 'สุขภาพ',
                value: createStar(random(1,6)),
            },
        ],
        timestamp: new Date(),

    };
    message.reply({ embed: horo });
}
module.exports = getHoro;