const Discord = require('discord.js');

module.exports = client => {

console.log("Bot Hazır");

var randomMesajlar = [

    `🧰 FuTi Tools 🧰`,
    `🔋 7/24 Aktif 🔋`,
    
]




setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
      client.user.setPresence({ activity: { type: "PLAYING", name: `${randomMesajlar1}`}})

;

}, 2 * 30000);

client.user.setStatus("online");
/*
idle yerine yazılabilecekler

dnd 
idle
online
ofline

*/
//

}
