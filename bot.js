const Discord = require("discord.js")
const client = new Discord.Client()
const logs = require('discord-logs');
logs(client);


require("./handler/eventHandler")(client);

client.on("guildMemberOffline", (member, oldStatus) => {
  if(member.id !== "827199578917830658")//kullanıcıid return
offlinelog = client.channels.cache.get("852639778645999656") //kanalid

let embed = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("FuTi Uptime Log")
.setDescription(member.user.tag+ "Düştü \nNedeni: Teknik Bakım.")
.setTimestamp()
offlinelog.send(embed)
});

client.on("guildMemberOnline", (member, newStatus) => {
  if(member.id !== "827199578917830658")//kullanıcıid return
onlinelog = client.channels.cache.get("852639778645999656")//kanalid
let embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("FuTi Uptime Log")
.setDescription(member.user.tag+ "Tekrardan Aktif. ")
.setTimestamp()
onlinelog.send(embed)
});


client.login(process.env.token);
