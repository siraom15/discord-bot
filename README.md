# Bot Discord

### Requirement

* [nodejs](https://nodejs.org/en/) v12+
* Discord bot token [Here](https://discord.com/developers/applications), If you're new [read this article](https://www.writebots.com/discord-bot-token/)
* Youtube Data API V3 [Link](https://developers.google.com/youtube/v3)

### Install

* Download/Clone this repository
* Install package (npm/yarn)
* Setup config.json

### Set up config.json

* prefix : prefix command (!เล่น)
* discord_bot_token : discord bot token [Link](https://discord.com/developers/applications)
* chatchannal : channel name for bot
* youtube_api : Youtube Data API V3 key [Link](https://developers.google.com/youtube/v3)
* client_id : bot client id [Link](https://discord.com/developers/applications)

### HowTo Use

```bash
$ npm install
$ npm start
```

or

```
$ yarn
$ yarn start
```

### Invite this bot

[Invite this bot to your discord channel](https://discord.com/oauth2/authorize?client_id=718169475777822841&scope=bot&permissions=8)

### All Command

```
คำสั่งทั้งหมด
เกี่ยวกับเพลง 🎵
เล่น/เพลง + Url เพลง
เล่น/เพลง + ชื่อเพลง
ข้าม => ข้ามไปเพลงต่อไปในคิว
คิว => แสดงคิวเพลงทั้งหมด
ลบ + เลขคิว => ลบเพลงนั้นออกจากคิว
สลับคิว => สลับคิวเพลง
เสียง + เลข(1-100) => ปรับความดังของเสียงเพลง
เล่นวน + เปิด/ปิด => เปลี่ยนสถานะเล่นวนซ้ำในคิว
ออกไป => Disconnect บอท
​
​
เกี่ยวกับเซิฟเวอร์ 🖥
เซิฟ => แสดงชื่อเซิฟเวอร์
สมาชิก => แสดงจำนวนสมาชิก
ข้อมูล => แสดงข้อมูลของคุณ
ข้อมูล + @mention => แสดงข้อมูลของคนที่ถูก mention
รูป => แสดงรูปโปรไฟล์
รูป + @mention => แสดงรูปโปรไฟล์ของคนที่ถูก Mention
เตะ + @mention => เตะสมาชิก (เฉพาะ Admin)
แบน + @mention => แบนสมาชิก (เฉพาะ Admin)
รายชื่อแบน => แสดงรายชื่อสมาชิกที่ถูกแบน
ปลดแบน + id => ปลดแบนโดยใช้ id จากฟังก์ชัน รายชื่อแบน
​
​
อื่นๆ 😀
กินไรดี => สุ่มชื่ออาหาร
ดูดวง => ดูดวงประจำวัน
ขนาด (+@mention) => เช็คขนาดน้องของคนที่ถูก mention อิอิ
คำคม => ขอคำคม
โควิด => สถานะการโควิดในไทยวันนี้
สีมงคล => แสดงสีมงคล
```
