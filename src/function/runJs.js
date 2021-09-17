// const fs = require('fs');

// let runJs = (message,args) =>{
    
//     if(!args[0]) return;
//     let jsCode = args[0].trim();
//     if(jsCode.slice(0,3)!='```'&&jsCode.slice(-3)!='```') return;
//     jsCode = jsCode.slice(3,-3);
//     console.log(jsCode);
//     eval(jsCode);
//     message.reply(`\`\`\`${eval(jsCode)}\`\`\``);
// }
// module.exports = runJs;