const Discord = require("discord.js")
const client = new Discord.Client()
const logs = require('discord-logs');
logs(client);


require("./handler/eventHandler")(client);

client.on("guildMemberOffline", (member, oldStatus) => {
  if(member.id !== "botid") return
offlinelog = client.channels.cache.get('oflinelogkanalid')

let embed = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("FuTi Uptime Log")
.setDescription(member.user.tag+ "Düştü \nNedeni: Teknik Bakım.")
.setTimestamp()
offlinelog.send(embed)
});

client.on("guildMemberOnline", (member, newStatus) => {
  if(member.id !== "botid") return
onlinelog = client.channels.cache.get('onlinelogkanalid')
let embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("FuTi Uptime Log")
.setDescription(member.user.tag+ "Tekrardan Aktif. ")
.setTimestamp()
onlinelog.send(embed)
});


client.login(process.env.token);
