const fetch = require('node-fetch');
let api = require('./api.json');
let numberWithComma = require('../../utils/numberWithComma');
let getCovidStat = async (message) => {
    try {
        let data;
        await fetch(api.todayStatUrl)
            .then(res => res.json())
            .then(json => data = json);
        data = data[0];
        const Embed = {
            color: "#ae0562",
            title: 'สถานการณ์ Covid-19 ประจำวัน',
            thumbnail: {
                url: 'https://ddc.moph.go.th/img/logo_web.png',
            },
            description: 'ข้อมูลจากกรมควบคุมโรค',
            url: 'https://covid19.ddc.moph.go.th/',
            timestamp: new Date(),
            fields: [
                { name: ':thermometer_face: ติดเชื้อเพิ่ม', value: `> ${numberWithComma(data.new_case)} ราย` },
                { name: ':microbe: ติดเชื้อสะสม', value: `> ${numberWithComma(data.total_case)} ราย` },

                { name: ':skull_crossbones: : เสียชีวิตเพิ่ม', value: `> ${numberWithComma(data.new_death)} ราย` },
                { name: ':skull: เสียชีวิตสะสม', value: `> ${numberWithComma(data.total_death)} ราย` },

                { name: ':hospital: กำลังรักษา', value: `> ${numberWithComma(data.new_recovered)} ราย` },
                { name: ':muscle: รักษาหาย', value: `> ${numberWithComma(data.total_recovered)} ราย` },

                { name: ':x::skull: อัตราการเสียชีวิต ', value: `> ${((data.total_death / data.total_case) * 100).toFixed(2)} %` },
                { name: ':white_check_mark::muscle: อัตราการรักษาหาย ', value: `> ${((data.total_recovered / data.total_case) * 100).toFixed(2)} %` },
            ]
        }
        message.channel.send({ embed: Embed })
    } catch (err) {
        console.log(err);
    }
}
module.exports = getCovidStat;